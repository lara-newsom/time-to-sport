import { Component, Inject } from '@angular/core';
import { LINKS } from '../models/category';
import { ROUTE_TOKENS } from '../models/route-tokens';
import { CartService  } from '../services/cart.service';
import { AppLoggerToken, LOGGER_TOKEN } from '../tokens/logger-token';
import { BUSINESS_NAME } from '../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly BUSINESS_NAME = BUSINESS_NAME;
  
  constructor(
    @Inject(LOGGER_TOKEN) private readonly logger: AppLoggerToken,
    protected readonly cartService: CartService
  ){}

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
