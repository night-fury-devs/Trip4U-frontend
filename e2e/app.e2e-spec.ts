import { Trip4uFrontendPage } from './app.po';

describe('trip4u-frontend App', function() {
  let page: Trip4uFrontendPage;

  beforeEach(() => {
    page = new Trip4uFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
