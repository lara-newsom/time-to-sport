import { Component, inject, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { LOGGER_TOKEN } from '../tokens/logger-token';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnDestroy {
  private readonly logger = inject(LOGGER_TOKEN);
  protected readonly productService = inject(ProductService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly destroyed$ = new ReplaySubject<void>(1);
  tableView = this.productService.tableView$;

  constructor() {
    this.activatedRoute.paramMap.pipe(
      tap((params) => {
        this.productService.setSelectedCategory(params.get('categoryId') || '')
        takeUntil(this.destroyed$)
      })
    ).subscribe();
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
