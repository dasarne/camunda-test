import { CamundaTestPage } from './app.po';

describe('camunda-test App', function() {
  let page: CamundaTestPage;

  beforeEach(() => {
    page = new CamundaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ct works!');
  });
});
