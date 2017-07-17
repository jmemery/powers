import { PowersPage } from './app.po';

describe('powers App', () => {
  let page: PowersPage;

  beforeEach(() => {
    page = new PowersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
