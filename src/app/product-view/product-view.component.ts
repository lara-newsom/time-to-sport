import { Component, Inject, Input, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { AppLoggerToken, LOGGER_TOKEN } from '../tokens/logger-token';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnDestroy {
  private readonly destroyed$ = new ReplaySubject<void>(1);
  tableView = this.productService.tableView$;

  constructor(
    @Inject(LOGGER_TOKEN) private readonly logger: AppLoggerToken,
    readonly productService: ProductService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
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
