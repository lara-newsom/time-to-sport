import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { LINKS } from '../models/category';
import { ROUTE_TOKENS } from '../models/route-tokens';
import { CartService  } from '../services/cart.service';
import { AppLoggerToken, LOGGER_TOKEN } from '../tokens/logger-token';
import { BUSINESS_NAME } from '../constants';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage
],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private readonly logger = inject<AppLoggerToken>(LOGGER_TOKEN);
  protected readonly cartService = inject(CartService);

  readonly BUSINESS_NAME = BUSINESS_NAME;
  readonly totalItems = toSignal(this.cartService.totalItems);
  readonly LINKS = LINKS;
  readonly ROUTE_TOKENS = ROUTE_TOKENS;
  readonly menuItemOne = 'Menu Item One';
  readonly logoUrl = '../../assets/images/Sport-Logo-Reversed.png';
  
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.logger?.log('menu was closed!');
  }

  selectCategory(name: string) {
    this.showMenu = false;
    this.logger?.log(`${name} was clicked!`);
  }
}
