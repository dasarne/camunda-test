import { browser, element, by } from 'protractor';

export class CamundaTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ct-root h1')).getText();
  }
}
