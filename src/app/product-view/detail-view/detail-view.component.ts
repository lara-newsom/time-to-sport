import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AddToCartButtonComponent } from 'src/app/shared-ui/add-to-cart-button/add-to-cart-button.component';


@Component({
  standalone: true,
  imports: [
    NgOptimizedImage,
    CurrencyPipe,
    AddToCartButtonComponent
],
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailViewComponent {
  protected readonly cartService = inject(CartService);
}

