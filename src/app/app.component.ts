import { Component, ViewEncapsulation, OnInit, Renderer2, OnDestroy, NgZone } from '@angular/core';
import { VERSION } from '../../devui/version';
import { Subscription, fromEvent } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  version;
  clickSub: Subscription = new Subscription();
  versionOptions = [];
  currentOption;

  constructor(private renderer2: Renderer2, private ngZone: NgZone) {

  }
  ngOnInit(): void {
    this.version = VERSION.full;
    this.versionOptions = [
      { name: this.version, link: '/components/get-start', target: '_self' },
      { name: '8.2.0', link: '/8.2.0/', target: '_self' }
    ];
    this.currentOption = this.versionOptions[0];
    this.ngZone.runOutsideAngular(() => {
      const headerMenu = document.querySelector('#headerMenu');
      const headerNode = headerMenu.parentNode;
      const containerNode = document.querySelector('.app-container');
      this.clickSub.add(fromEvent(headerMenu, 'click').subscribe(e => {
        if (headerMenu.classList.contains('active')) {
          this.renderer2.removeClass(headerMenu, 'active');
          this.renderer2.removeClass(headerNode, 'active');
        } else {
          this.renderer2.addClass(headerMenu, 'active');
          this.renderer2.addClass(headerNode, 'active');
        }
      }));
      this.clickSub.add(fromEvent(containerNode, 'click').subscribe(e => {
        if (headerMenu.classList.contains('active') && !(<any>headerNode).contains(e.target)) {
          this.renderer2.removeClass(headerMenu, 'active');
          this.renderer2.removeClass(headerNode, 'active');
        }
      }));
    });
  }

  jumpTo($event) {
    window.open($event.link, $event.target);
  }

  ngOnDestroy(): void {
    if (this.clickSub) {
      this.clickSub.unsubscribe();
    }
  }

}
