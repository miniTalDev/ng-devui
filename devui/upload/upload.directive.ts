import { Directive, HostListener, Input, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import { UploadComponent } from './upload.class';
import { FileUploader } from './file-uploader.class';
import { IUploadOptions, IFileOptions } from './file-uploader.types';
import { SelectFiles } from './select-files.utils';
import { map, debounceTime, last } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { I18nInterface, I18nService } from 'ng-devui/i18n';
@Directive({
  selector: '[dUpload]',
  exportAs: 'dUpload'
})
export class UploadDirective extends UploadComponent implements OnDestroy {
  @Input() uploadOptions: IUploadOptions;
  @Input() fileOptions: IFileOptions;
  @Input() uploadedFiles: Array<Object> = [];
  @Input() fileUploaders: Array<FileUploader> = [];
  @Input() enableDrop = false;
  @Output() public fileOver: EventEmitter<any> = new EventEmitter<any>();
  @Output() public fileDrop: EventEmitter<File[]> = new EventEmitter<File[]>();
  @Output() successEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() errorEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() alertMsgEvent: EventEmitter<any> = new EventEmitter<any>();

  errorMsg = [];
  protected element: ElementRef;
  i18nText: I18nInterface['upload'];
  i18nSubscription: Subscription;

  constructor(private selectFiles: SelectFiles, private i18n: I18nService, element: ElementRef) {
    super();
    this.element = element;
    this.i18nText = this.i18n.getI18nText().upload;
    this.i18nSubscription = this.i18n.langChange().subscribe((data) => {
      this.i18nText = data.upload;
    });
  }

  @HostListener('click')
  onClick() {
    this._dealFiles(this.selectFiles.triggerSelectFiles(this.fileOptions, this.uploadOptions));
  }

  _dealFiles(observale) {
    super.resetSameNameFiles();
    observale.pipe(
      map(file => {
        super.addFile(file, this.uploadOptions);
      }),
      debounceTime(100)
    )
      .subscribe(
        () => {
          this.checkValid();
          const sameNameFiles = super.getSameNameFiles();
          this.uploadFiles();
          if (this.uploadOptions.checkSameName && sameNameFiles.length) {
            this.errorMsg = [{
              severity: 'warn',
              detail: this.i18nText.getExistSameNameFilesMsg(sameNameFiles)
            }];
            this.alertMsgEvent.emit(this.errorMsg);
          }
        },
        (error: Error) => {
          this.errorMsg = [{severity: 'warn', detail: error.message}];
          this.alertMsgEvent.emit(this.errorMsg);
        }
      );
  }

  // 文件大小、类型是否符合上传条件
  checkValid() {
    let totalFileSize = 0;
    this.fileUploaders.forEach(fileUploader => {
      totalFileSize += fileUploader.file.size;
      const checkResult = this.selectFiles._validateFiles(fileUploader.file, this.fileOptions.accept, fileUploader.uploadOptions);
      if (checkResult && checkResult.checkError) {
        super.deleteFile(fileUploader.file);
        this.errorMsg = [{ severity: 'warn',  detail: checkResult.errorMsg}];
        this.alertMsgEvent.emit(this.errorMsg);
        return;
      }
    });
  }
  uploadFiles() {
    const uploadObservable = super.upload();
    uploadObservable
      .pipe(
        last()
      )
      .subscribe(
        (results: Array<{ file: File, response: any }>) => {
          this.successEvent.emit(results);
          results.forEach((result) => {
            this.uploadedFiles.push(result.file);
          });
        },
        (error) => {
          this.errorEvent.emit(error);
        }
      );
  }

  @HostListener('drop', [ '$event' ])
  public onDrop(event: any): void {
    if (!this.enableDrop) {
      return;
    }
    const transfer = this._getTransfer(event);
    if (!transfer) {
      return;
    }
    this._preventAndStop(event);
    this._dealFiles(this.selectFiles.triggerDropFiles(this.fileOptions, this.uploadOptions, transfer.files));
    this.fileDrop.emit(transfer.files);
  }

  @HostListener('dragover', [ '$event' ])
  public onDragOver(event: any): void {
    if (!this.enableDrop) {
      return;
    }
    const transfer = this._getTransfer(event);
    if (!this._haveFiles(transfer.types)) {
      return;
    }

    transfer.dropEffect = 'move';
    this._preventAndStop(event);
    this.fileOver.emit(true);
  }

  @HostListener('dragleave', [ '$event' ])
  public onDragLeave(event: any): any {
    if (!this.enableDrop) {
      return;
    }
    if ((this as any).element) {
      if (event.currentTarget === (this as any).element[ 0 ]) {
        return;
      }
    }

    this._preventAndStop(event);
    this.fileOver.emit(false);
  }

  protected _getTransfer(event: any): any {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  protected _preventAndStop(event: any): any {
    event.preventDefault();
    event.stopPropagation();
  }

  protected _haveFiles(types: any): any {
    if (!types) {
      return false;
    }

    if (types.indexOf) {
      return types.indexOf('Files') !== -1;
    } else if (types.contains) {
      return types.contains('Files');
    } else {
      return false;
    }
  }

  ngOnDestroy() {
    if (this.i18nSubscription) {
      this.i18nSubscription.unsubscribe();
    }
  }
}
