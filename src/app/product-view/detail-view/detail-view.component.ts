import { CurrencyPipe, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CartService } from 'src/app/services/cart.service';
import { AddToCartButtonComponent } from 'src/app/shared-ui/add-to-cart-button/add-to-cart-button.component';


@Component({
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    NgFor,
    CurrencyPipe,
    AddToCartButtonComponent
],
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailViewComponent {
  private readonly cartService = inject(CartService);

  readonly selectedProduct = toSignal(this.cartService.selectedItemPlusQuantity);
}

