import { DocsTrackerPage } from './app.po';

describe('docs-tracker App', () => {
  let page: DocsTrackerPage;

  beforeEach(() => {
    page = new DocsTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
