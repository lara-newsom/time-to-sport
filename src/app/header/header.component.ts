import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { LINKS } from '../models/category';
import { ROUTE_TOKENS } from '../models/route-tokens';
import { CartService  } from '../services/cart.service';
import { AppLoggerToken, LOGGER_TOKEN } from '../tokens/logger-token';
import { BUSINESS_NAME } from '../constants';
import { NgOptimizedImage, AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    RouterLink,
    NgOptimizedImage,
    RouterLinkActive,
    AsyncPipe
],
})
export class HeaderComponent {
  readonly BUSINESS_NAME = BUSINESS_NAME;
  private readonly logger = inject(LOGGER_TOKEN);
  protected readonly cartService = inject(CartService);

  totalItems = this.cartService.totalItems;
  showMenu = false;
  readonly LINKS = LINKS;
  readonly ROUTE_TOKENS = ROUTE_TOKENS;

  readonly menuItemOne = 'Menu Item One';
  readonly logoUrl = '../../assets/images/Sport-Logo-Reversed.png';

  toggleMenu(){
    this.showMenu = !this.showMenu;
    this.logger?.log('menu was closed!');
  }

  selectCategory(name: string){
    this.showMenu = false;
    this.logger?.log(`${name} was clicked!`);
  }
}
