import { render, screen } from '@testing-library/angular';
import { AddToCartButtonComponent } from './add-to-cart-button.component';
import { createSpyFromClass } from 'jest-auto-spies';
import { CartService } from '../../services/cart.service';
import { RouterTestingModule } from '@angular/router/testing';
import userEvent from '@testing-library/user-event';

describe('AddToCartButtonComponent', () => {
  async function setup(
    options: Partial<{
      cartItems: Record<string, { quantity: number }>;
      productId: string;
      numberOnly: boolean;
    }> = {}
  ) {
    const {
        cartItems,
        productId,
        numberOnly
    } = {
        cartItems: {},
        productId: 'productId',
        numberOnly: false,
        ...options
    };
    const mockCartService = createSpyFromClass(CartService, {
      observablePropsToSpyOn: ['cartItems$'],
      methodsToSpyOn: ['addCartItem', 'decrementCartItem'],
    });
    mockCartService.cartItems$.nextWith(cartItems);

    const { fixture } = await render(AddToCartButtonComponent, {
      imports: [RouterTestingModule],
      providers: [
        {
          provide: CartService,
          useValue: mockCartService,
        },
      ],
      componentProperties: {
        productId,
        numberOnly,
      },
    });

    return {
      fixture,
      mockCartService,
    };
  }

  it('correctly renders button for product that is not in the cart', async () => {
    await setup();

    const minusButton = screen.getByRole('button', { name: /Remove one from cart/i});
    expect(minusButton).toBeVisible();

    const addButtons = screen.getAllByRole('button', { name: /Add one to cart/i});
    expect(addButtons[0]).toBeVisible();

    expect(addButtons[1]).toBeVisible();
  });

  it('correctly renders button for product that is in the cart', async () => {
    const productId = '1234';
    const quantity = 5;
    await setup({
        cartItems: {[productId]: {quantity}},
        productId
    });

    const minusButton = screen.getByRole('button', { name: /Remove one from cart/i});
    expect(minusButton).toBeVisible();

    const addButtons = screen.getByRole('button', { name: /Add one to cart/i});
    expect(addButtons).toBeVisible();

    const middleButton = screen.getByRole('button', { name: /Add one to the 5 in the cart/i});
    expect(middleButton).toBeVisible();
  });

  it('correctly renders button text for number only when item is not in cart', async () => {
    const productId = '1234';
    await setup({
        cartItems: {},
        productId,
        numberOnly: true,
    });

    const middleButton = screen.getByText(0);
    expect(middleButton).toBeVisible();
  });

  it('correctly renders button text for number only when item is in cart', async () => {
    const productId = '1234';
    const quantity = 5;
    await setup({
        cartItems: {[productId]: {quantity}},
        productId,
        numberOnly: true,
    });

    const middleButton = screen.getByText(quantity);
    expect(middleButton).toBeVisible();
  });

  it('calls product service with expected params', async () => {
    const productId = '1234';
    const {mockCartService} = await setup({
        cartItems: {},
        productId,
    });

    const minusButton = screen.getByRole('button', { name: /Remove one from cart/i});

    const addButtons = screen.getAllByRole('button', { name: /Add one to cart/i});
    const middleButton = addButtons[0];
    const addButton = addButtons[1];

    userEvent.click(addButton);
    expect(mockCartService.addCartItem).toHaveBeenCalledTimes(1);
    expect(mockCartService.addCartItem).toHaveBeenCalledWith(productId);
    
    userEvent.click(middleButton);
    expect(mockCartService.addCartItem).toHaveBeenCalledTimes(2);
    expect(mockCartService.addCartItem).toHaveBeenNthCalledWith(2, productId);

    userEvent.click(minusButton);
    expect(mockCartService.decrementCartItem).toHaveBeenCalledTimes(1);
    expect(mockCartService.decrementCartItem).toHaveBeenCalledWith(productId);
  });
});
