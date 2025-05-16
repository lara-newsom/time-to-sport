import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from '../card/card.module';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [
    CardModule,
    RouterModule,
    NgFor,
  ],
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.scss']
})
export class SubSectionComponent {
  protected readonly productService = inject(ProductService);

  readonly featured = toSignal(this.productService.homeProducts);
}
