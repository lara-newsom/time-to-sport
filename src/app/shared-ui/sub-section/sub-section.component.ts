import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CardComponent } from '../card/card.component';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-sub-section',
    templateUrl: './sub-section.component.html',
    styleUrls: ['./sub-section.component.scss'],
    standalone: true,
    imports: [NgFor, CardComponent, AsyncPipe]
})
export class SubSectionComponent {
  private readonly productService = inject(ProductService);
  readonly featured = this.productService.homeProducts;
}
