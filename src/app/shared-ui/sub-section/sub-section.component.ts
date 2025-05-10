import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CardComponent } from '../card/card.component';

@Component({
    selector: 'app-sub-section',
    templateUrl: './sub-section.component.html',
    styleUrls: ['./sub-section.component.scss'],
    standalone: true,
    imports: [CardComponent]
})
export class SubSectionComponent {
  protected readonly productService = inject(ProductService);
}
