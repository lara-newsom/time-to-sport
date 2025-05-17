import { Product } from '../models/product';
import { createProduct } from '../models/data-mocks';
import { CartService } from './cart.service';
import { ProductService } from './product.service';
import { createSpyFromClass } from 'jest-auto-spies';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { CartHttpService } from './cart-http.service';
import { of } from 'rxjs';

describe('CartService', ()=> {
    function setup(options : Partial<{
        selectedProduct: Product,
        homeProducts: Product[],
        products: Product[]
    }> = {}){
        const {
            selectedProduct,
            homeProducts,
            products
        } = {
            selectedProduct: createProduct(),
            homeProducts: [
                createProduct({id: '1'}),
                createProduct({id: '2'}),
                createProduct({id: '3'}),
            ],
            products: [
                createProduct({id: '1'}),
                createProduct({id: '2'}),
                createProduct({id: '3'}),
            ],
            ...options
        };

        const mockProductService = createSpyFromClass(ProductService, {
            observablePropsToSpyOn: [
                'homeProducts',
                'products',
                'selectedProduct'
            ]
        });
        mockProductService.selectedProduct.nextWith(selectedProduct);
        mockProductService.homeProducts.nextWith(homeProducts);
        mockProductService.products.nextWith(products);

        const mockHttpCartService = createSpyFromClass(CartHttpService, {
            methodsToSpyOn: [
                'getCartItems'
            ]
        });

        mockHttpCartService.getCartItems.mockReturnValue(of({}));

        const serviceUnderTest = new CartService(mockProductService, mockHttpCartService);

        return {
            mockProductService,
            serviceUnderTest,
        }
    }
    describe('cartItemsPlusQuantity', () => {
        it('adds the quantity property to products in the cart', () => {
            const productId1 = 'product-1';
            const productQuantity1 = 2;

            const productId2 = 'product-2';
            const productQuantity2 = 5;

            const cartItems = {
                [productId1]: { quantity: productQuantity1},
                [productId2]: { quantity: productQuantity2}
            };

            const product1 = createProduct({
                id: productId1,
            });
            const product = createProduct({
                id: 'other-product',
            });
            const product2 =  createProduct({
                id: productId2,
            });

            const products = [product1, product, product2];

            const expectedProducts = [
                {
                    ...product1,
                    quantity: productQuantity1
                },
                {
                    ...product2,
                    quantity: productQuantity2
                },
            ];

            const { serviceUnderTest } = setup({products});

            serviceUnderTest.setCartItems(cartItems);

            const cartItemsPlusQuantitySpy = subscribeSpyTo(serviceUnderTest.cartItemsPlusQuantity);
            expect(cartItemsPlusQuantitySpy.getLastValue()).toEqual(expectedProducts);
        });
    });

    describe('selectedItemPlusQuantity', () => {
        it('adds quantity to selected product', () => {
            const selectedId = 'id-1';
            const quantity = 7;
            const selectedProduct = createProduct({id: selectedId});
            const cartItems = {
                [selectedId]: { quantity }
            };

            const {serviceUnderTest } = setup({selectedProduct});
            serviceUnderTest.setCartItems(cartItems);

            const selectedItemPlusQuantitySpy = subscribeSpyTo(serviceUnderTest.selectedItemPlusQuantity);

            expect(selectedItemPlusQuantitySpy.getLastValue()).toEqual({
                ...selectedProduct,
                quantity
            });
        });

        it('sets quantity to 0 if selected product is not in cart', () => {
            const selectedId = 'id-1';
            const quantity = 7;
            const selectedProduct = createProduct({id: selectedId});
            const cartItems = {};

            const {serviceUnderTest } = setup({selectedProduct});
            serviceUnderTest.setCartItems(cartItems);

            const selectedItemPlusQuantitySpy = subscribeSpyTo(serviceUnderTest.selectedItemPlusQuantity);

            expect(selectedItemPlusQuantitySpy.getLastValue()).toEqual({
                ...selectedProduct,
                quantity: 0
            });
        });
    });

    describe('featuredProductsPlusQuantity', () => {
        it('add quantities to featured products that are in the cart', () => {
            const productId1 = 'product-1';
            const productQuantity1 = 2;

            const productId2 = 'product-2';
            const productQuantity2 = 5;

            const cartItems = {
                [productId1]: { quantity: productQuantity1},
                [productId2]: { quantity: productQuantity2}
            };

            const product1 = createProduct({
                id: productId1,
            });
            const product = createProduct({
                id: 'other-product',
            });
            const product2 =  createProduct({
                id: productId2,
            });

            const homeProducts = [product1, product, product2];

            const expectedProducts = [
                {
                    ...product1,
                    quantity: productQuantity1
                },
                {
                    ...product,
                    quantity: 0
                },
                {
                    ...product2,
                    quantity: productQuantity2
                },
            ];

            const {serviceUnderTest} = setup({homeProducts});

            serviceUnderTest.setCartItems(cartItems);

            const featuredProductsPlusQuantitySpy = subscribeSpyTo(serviceUnderTest.featuredProductsPlusQuantity);

            expect(featuredProductsPlusQuantitySpy.getLastValue()).toEqual(expectedProducts);
        });
    });

    describe('cartTotals', () => {
        it('calculates cart totals', () => {
            const productId1 = 'product-1';
            const productQuantity1 = 2;
            const productPrice1 = 3.00;

            const productId2 = 'product-2';
            const productQuantity2 = 5;
            const productPrice2 = 5.00;

            const cartItems = {
                [productId1]: { quantity: productQuantity1 },
                [productId2]: { quantity: productQuantity2 }
            };

            const product1 = createProduct({
                id: productId1,
                price: productPrice1,
            });
            const product = createProduct({
                id: 'other-product',
            });
            const product2 =  createProduct({
                id: productId2,
                price: productPrice2,
            });

            const products = [product1, product, product2];

            const expectedTotals = {
                subtotal: 31.00,
                salesTax: 1.9375,
                shipping: 1.55,
                total: 34.4875
            };

            const { serviceUnderTest } = setup({products});

            serviceUnderTest.setCartItems(cartItems);

            const cartTotalsSpy = subscribeSpyTo(serviceUnderTest.cartTotals);
            expect(cartTotalsSpy.getLastValue()).toEqual(expectedTotals);
        });
    });

    describe('totalItems', () => {
        it('calculates the total items in the cart', () => {
            const productId1 = 'product-1';
            const productQuantity1 = 2;

            const productId2 = 'product-2';
            const productQuantity2 = 5;

            const cartItems = {
                [productId1]: { quantity: productQuantity1 },
                [productId2]: { quantity: productQuantity2 }
            };

            const product1 = createProduct({
                id: productId1,
            });
            const product = createProduct({
                id: 'other-product',
            });
            const product2 =  createProduct({
                id: productId2,
            });

            const products = [product1, product, product2];

            const { serviceUnderTest } = setup({products});

            serviceUnderTest.setCartItems(cartItems);

            const totalItemsSpy = subscribeSpyTo(serviceUnderTest.totalItems);
            expect(totalItemsSpy.getLastValue()).toBe(7);
        });
    });

    describe('addCartItem/decrementCartItem', () => {
        it('adds and removes cart items', () => {
            const productId1 = 'product-1';
            const productQuantity1 = 2;

            const productId2 = 'product-2';

            const cartItems = {
                [productId1]: { quantity: productQuantity1 },
            };

            const products = [
                createProduct({id: productId1}),
                createProduct({id: productId2}),
            ]
            const { serviceUnderTest } = setup({products});

            serviceUnderTest.setCartItems(cartItems);

            const cartItemsSpy = subscribeSpyTo(serviceUnderTest.cartItems$);
            expect(cartItemsSpy.getLastValue()).toEqual(cartItems);

            serviceUnderTest.addCartItem(productId1);

            const totalItemsSpy = subscribeSpyTo(serviceUnderTest.totalItems);
            expect(totalItemsSpy.getLastValue()).toBe(3);
            expect(cartItemsSpy.getLastValue()).toEqual({
                [productId1]: { quantity: productQuantity1 + 1 },
            });

            serviceUnderTest.addCartItem(productId2);

            expect(totalItemsSpy.getLastValue()).toBe(4);
            expect(cartItemsSpy.getLastValue()).toEqual({
                [productId1]: { quantity: productQuantity1 + 1 },
                [productId2]: { quantity:  1 },
            });

            serviceUnderTest.decrementCartItem(productId1);

            expect(totalItemsSpy.getLastValue()).toBe(3);
            expect(cartItemsSpy.getLastValue()).toEqual({
                [productId1]: { quantity: productQuantity1 },
                [productId2]: { quantity:  1 },
            });

            serviceUnderTest.decrementCartItem(productId1);

            expect(totalItemsSpy.getLastValue()).toBe(2);
            expect(cartItemsSpy.getLastValue()).toEqual({
                [productId1]: { quantity: productQuantity1 - 1 },
                [productId2]: { quantity:  1 },
            });

            serviceUnderTest.decrementCartItem(productId1);

            expect(totalItemsSpy.getLastValue()).toBe(1);
            expect(cartItemsSpy.getLastValue()).toEqual({
                [productId2]: { quantity:  1 },
            });

            serviceUnderTest.decrementCartItem(productId2);

            expect(totalItemsSpy.getLastValue()).toBe(0);
            expect(cartItemsSpy.getLastValue()).toEqual({
            });
        });
    });
});