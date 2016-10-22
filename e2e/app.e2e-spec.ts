import { FishLoggerPage } from './app.po';

describe('fish-logger App', function() {
  let page: FishLoggerPage;

  beforeEach(() => {
    page = new FishLoggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
