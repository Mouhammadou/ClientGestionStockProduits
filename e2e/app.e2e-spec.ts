import { GestionStockProduitsPage } from './app.po';

describe('gestion-stock-produits App', function() {
  let page: GestionStockProduitsPage;

  beforeEach(() => {
    page = new GestionStockProduitsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
