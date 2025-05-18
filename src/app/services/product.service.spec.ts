import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { ProductHttpService } from './product-http.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category';
import { createProduct } from '../models/data-mocks';
import { of } from 'rxjs';

// Mock ProductHttpService
class MockProductHttpService {
  httpGetProducts = jest.fn();
}

// Mock ActivatedRoute
class MockActivatedRoute {
  queryParamMap = of({ get: (key: string) => undefined });
}

describe('ProductService', () => {
  function setup(options: Partial<{ products: any[], category: string, queryProductId: string }> = {}) {
    const products = options.products || [createProduct({ id: '1', category: Category.ALL }), createProduct({ id: '2', category: Category.SHOOTING_THINGS })];
    const category = options.category || Category.ALL;
    const queryProductId = options.queryProductId;

    const mockProductHttpService = new MockProductHttpService();
    mockProductHttpService.httpGetProducts.mockReturnValue(of(products));

    const queryParamMap = of({
      get: (key: string) => (key === 'productId' ? queryProductId : undefined)
    });
    const mockActivatedRoute = { queryParamMap };

    TestBed.configureTestingModule({
      providers: [
        ProductService,
        { provide: ProductHttpService, useValue: mockProductHttpService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    });
    const service = TestBed.inject(ProductService);
    service.setSelectedCategory(category);
    return { service, products };
  }

  it('returns all products when category is ALL', () => {
    const { service, products } = setup({ category: Category.ALL });
    expect(service.filteredProducts()).toEqual(products);
  });

  it('returns filtered products by category', () => {
    const { service, products } = setup({ category: Category.SHOOTING_THINGS });
    expect(service.filteredProducts()).toEqual(products.filter(p => p.category === Category.SHOOTING_THINGS));
  });

  it('returns home products (first, middle, last)', () => {
    const { service, products } = setup({ products: [
      createProduct({ id: '1' }),
      createProduct({ id: '2' }),
      createProduct({ id: '3' }),
      createProduct({ id: '4' })
    ] });
    const allProducts = service.products() || [];
    expect(service.homeProducts()).toEqual([
      allProducts[0],
      allProducts[2],
      allProducts[3]
    ]);
  });

  it('toggles tableView state', () => {
    const { service } = setup();
    service.setTableView(true);
    expect(service.tableView()).toBe(true);
    service.setTableView(false);
    expect(service.tableView()).toBe(false);
    service.setTableView();
    expect(service.tableView()).toBe(true);
  });

  it('returns selectedProduct by query param', () => {
    const { service, products } = setup({ queryProductId: '2' });
    expect(service.selectedProduct()).toEqual(products[1]);
  });

  it('returns first product if query param not found', () => {
    const { service, products } = setup({ queryProductId: 'notfound' });
    expect(service.selectedProduct()).toEqual(products[0]);
  });
});
