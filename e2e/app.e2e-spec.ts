import { ActiveGridUIPage } from './app.po';

describe('active-grid-ui App', function() {
  let page: ActiveGridUIPage;

  beforeEach(() => {
    page = new ActiveGridUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
