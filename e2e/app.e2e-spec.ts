import { AngularShoppingPage } from './app.po';

describe('angular-shopping App', function() {
  let page: AngularShoppingPage;

  beforeEach(() => {
    page = new AngularShoppingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
