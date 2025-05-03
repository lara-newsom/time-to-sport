import { Component, inject } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent {
  protected readonly cartService = inject(CartService);
}

