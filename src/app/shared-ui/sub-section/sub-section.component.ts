import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CardComponent
],
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubSectionComponent {
  protected readonly productService = inject(ProductService);
}
