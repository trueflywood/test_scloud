import { ScloudPage } from './app.po';

describe('scloud App', () => {
  let page: ScloudPage;

  beforeEach(() => {
    page = new ScloudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
