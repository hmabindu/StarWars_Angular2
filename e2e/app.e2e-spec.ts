import { TabnerportalPage } from './app.po';

describe('tabnerportal App', function() {
  let page: TabnerportalPage;

  beforeEach(() => {
    page = new TabnerportalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
