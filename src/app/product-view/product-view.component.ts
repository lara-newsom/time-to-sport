import { Component, inject, OnDestroy, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { AppLoggerToken, LOGGER_TOKEN } from '../tokens/logger-token';
import { ReplaySubject } from 'rxjs';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TableViewComponent } from './table-view/table-view.component';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.scss'],
    standalone: true,
    imports: [
    MatSlideToggle,
    TableViewComponent,
    SideMenuComponent,
    RouterOutlet,
],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductViewComponent implements OnDestroy {
  private readonly logger = inject<AppLoggerToken>(LOGGER_TOKEN);
  readonly productService = inject(ProductService);
  private readonly router = inject(Router);
  private readonly destroyed$ = new ReplaySubject<void>(1);
  private readonly cdr = inject(ChangeDetectorRef);
  @Input() set categoryId(value: string) {
    this.productService.setSelectedCategory(value);
  };


  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.cdr.markForCheck();
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
