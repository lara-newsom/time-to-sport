import { Component, inject, Input, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { LOGGER_TOKEN } from '../tokens/logger-token';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnDestroy {
  @Input() set categoryId(val: string) {
    this.productService.setSelectedCategory(val);
  };
  private readonly logger = inject(LOGGER_TOKEN);
  protected readonly productService = inject(ProductService);
  private readonly router = inject(Router);

  private readonly destroyed$ = new ReplaySubject<void>(1);
  tableView = this.productService.tableView$;

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        const content = document.querySelector<HTMLElement>('#productDetail');
        if (content) {
          content.focus();
        }
      });
  }

  switchView() {
    this.productService.setTableView();
  }

  handleRowSelect(event: unknown) {
    this.logger?.log(`showing ${event}`);
    this.productService.setTableView(false);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
