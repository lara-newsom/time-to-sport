import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductComponent } from './featured-product.component';
import { FeaturedProductModule } from './featured-product.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeaturedProductComponent', () => {
  let component: FeaturedProductComponent;
  let fixture: ComponentFixture<FeaturedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProductModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
