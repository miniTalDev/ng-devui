import { Theme, devuiLightTheme, devuiDarkTheme } from 'ng-devui/theme';
export const greenLightTheme: Theme = new Theme({
  id: 'green-light-theme',
  name: 'Light Mode',
  cnName: '浅色主题',
  data: Object.assign({}, devuiLightTheme.data, {
    'devui-global-bg': '#f3f8f7',
    'devui-brand': '#3DCCA6',
    'devui-brand-foil': '#7fdac1',
    'devui-brand-hover': '#6DDEBB',
    'devui-brand-active': '#07c693',
    'devui-brand-active-focus': '#369676',
    'devui-link': '#07c693',
    'devui-link-active': '#07c693',
    'devui-link-light': '#96fac8',
    'devui-link-light-active': '#befade',
    'devui-info': '#079CCD',
    'devui-initial': '#CCCCCC',
    'devui-icon-fill-active': '#3DCCA6',
    'devui-icon-fill-active-hover': '#07c693',
    'devui-form-control-line-active': '#3DCCA6',
    'devui-form-control-line-active-hover': '#2EB28A',
    'devui-list-item-active-bg': '#3DCCA6',
    'devui-list-item-active-hover-bg': '#07c693',
    'devui-list-item-hover-bg': '#f3fef9',
    'devui-list-item-hover-text': '#07c693',
    'devui-list-item-selected-bg': '#f3fef9',
    'devui-list-item-strip-bg': '#f3fef9',
    'devui-connected-overlay-line': '#07c693',
    'devui-embed-search-bg': '#f3fef9',
    'devui-float-block-shadow': 'rgba(94, 224, 181, 0.3)',
    'devui-primary': '#3DCCA6',
    'devui-primary-hover': '#6DDEBB',
    'devui-primary-active': '#369676',
    'devui-info-line': '#0486b1',
    'devui-info-bg': '#e3f0f5',
    'devui-success-line': '#50d492',
    'devui-success-bg': '#edfff9',
    'devui-primary-line': '#3DCCA6',
    'devui-primary-bg': '#f3fef9',
    'devui-default-line': '#3DCCA6',
    'devui-default-bg': '#f3f8f7',
  }),
  isDark: false,
  extends: 'devui-dark-theme',
});

export const greenDarkTheme: Theme = new Theme({
  id: 'green-dark-theme',
  name: 'Dark Mode',
  cnName: '深色主题',
  data: Object.assign({}, devuiDarkTheme.data, {
    'devui-brand': '#3DCCA6',
    'devui-brand-foil': '#395e54',
    'devui-brand-hover': '#4c9780',
    'devui-brand-active': '#07c693',
    'devui-brand-active-focus': '#297058',
    'devui-link': '#07c693',
    'devui-link-active': '#08a57b',
    'devui-info': '#046788',
    'devui-initial': '#64676e',
    'devui-icon-fill-active': '#3DCCA6',
    'devui-icon-fill-active-hover': '#07c693',
    'devui-form-control-line-active': '#3DCCA6',
    'devui-form-control-line-active-hover': '#297058',
    'devui-list-item-active-bg': '#3DCCA6',
    'devui-list-item-active-hover-bg': '#07c693',
    'devui-list-item-hover-text': '#07c693',
    'devui-connected-overlay-line': '#07c693',
    'devui-embed-search-bg': '#3f4241',
    'devui-float-block-shadow': 'rgba(94, 224, 181, 0.3)',
    'devui-primary': '#3DCCA6',
    'devui-primary-hover': '#6DDEBB',
    'devui-primary-active': '#369676',
    'devui-info-line': '#035e7c',
    'devui-info-bg': '#383c3d',
    'devui-primary-line': '#3DCCA6',
    'devui-primary-bg': '#3f4241',
    'devui-default-line': '#3DCCA6',
    'devui-default-bg': '#383838',
  }),
  isDark: true,
  extends: 'devui-dark-theme',
});

export const devuiLightLargeTheme: Theme = new Theme({
  id: 'devui-light-large-theme',
  name: 'Light Large Mode',
  cnName: '浅色大字号主题',
  data: Object.assign({}, devuiLightTheme.data, {
    'devui-font-size': '14px',
    'devui-font-size-card-title': '16px',
    'devui-font-size-page-title': '18px',
    'devui-font-size-modal-title': '20px',
    'devui-font-size-price': '22px',
    'devui-font-size-data-overview': '26px',

    'devui-font-size-icon': '18px',
    'devui-font-size-sm': '14px',
    'devui-font-size-md': '14px',
    'devui-font-size-lg': '16px',
  }),
  isDark: false,
  extends: 'devui-light-theme',
});

export const devuiDarkLargeTheme: Theme = new Theme({
  id: 'devui-dark-large-theme',
  name: 'Dark Large Mode',
  cnName: '深色大字号主题',
  data: Object.assign({}, devuiDarkTheme.data, {
    'devui-font-size': '14px',
    'devui-font-size-card-title': '16px',
    'devui-font-size-page-title': '18px',
    'devui-font-size-modal-title': '20px',
    'devui-font-size-price': '22px',
    'devui-font-size-data-overview': '26px',

    'devui-font-size-icon': '18px',
    'devui-font-size-sm': '14px',
    'devui-font-size-md': '14px',
    'devui-font-size-lg': '16px',
  }),
  isDark: true,
  extends: 'devui-dark-theme',
});

export const greenLightLargeTheme: Theme = new Theme({
  id: 'green-light-large-theme',
  name: 'Green Light Large Mode',
  cnName: '绿浅色大字号主题',
  data: Object.assign({}, greenLightTheme.data, {
    'devui-font-size': '14px',
    'devui-font-size-card-title': '16px',
    'devui-font-size-page-title': '18px',
    'devui-font-size-modal-title': '20px',
    'devui-font-size-price': '22px',
    'devui-font-size-data-overview': '26px',

    'devui-font-size-icon': '18px',
    'devui-font-size-sm': '14px',
    'devui-font-size-md': '14px',
    'devui-font-size-lg': '16px',
  }),
  isDark: true,
  extends: 'devui-light-theme',
});

export const greenDarkLargeTheme: Theme = new Theme({
  id: 'green-dark-large-theme',
  name: 'Green Dark Large Mode',
  cnName: '绿深色大字号主题',
  data: Object.assign({}, greenDarkTheme.data, {
    'devui-font-size': '14px',
    'devui-font-size-card-title': '16px',
    'devui-font-size-page-title': '18px',
    'devui-font-size-modal-title': '20px',
    'devui-font-size-price': '22px',
    'devui-font-size-data-overview': '26px',

    'devui-font-size-icon': '18px',
    'devui-font-size-sm': '14px',
    'devui-font-size-md': '14px',
    'devui-font-size-lg': '16px',
  }),
  isDark: true,
  extends: 'devui-dark-theme',
});
