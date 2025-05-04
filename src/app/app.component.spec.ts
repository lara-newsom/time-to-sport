import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {render, screen} from '@testing-library/angular';
import { BUSINESS_NAME } from './constants';
import { HeaderComponent } from './header/header.component';

describe('AppComponent', () => {

  async function setup() {
    const {fixture} = await render(AppComponent, {
      imports: [
        RouterTestingModule,
        HeaderComponent,
      ]
    });
    return {
      fixture
    }
  }

  it('renders the business name in a visually hidden header element', async () => {
    await setup();
    const businessNameHeader = screen.getByText(BUSINESS_NAME);
    expect(businessNameHeader).toBeTruthy();
    expect(businessNameHeader).toBeInTheDocument();
  });
});
