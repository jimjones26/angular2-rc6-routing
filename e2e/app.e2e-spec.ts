import { Angular2Rc6RoutingPage } from './app.po';

describe('angular2-rc6-routing App', function() {
  let page: Angular2Rc6RoutingPage;

  beforeEach(() => {
    page = new Angular2Rc6RoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
