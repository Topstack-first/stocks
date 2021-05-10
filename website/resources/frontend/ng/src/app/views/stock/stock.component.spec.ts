import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StockComponent } from './stock.component';

describe('StockComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        StockComponent
      ],
    }).compileComponents();
  });

  it('should create the stock', () => {
    const fixture = TestBed.createComponent(StockComponent);
    const stock = fixture.componentInstance;
    expect(stock).toBeTruthy();
  });

  it(`should have as title 'angular'`, () => {
    const fixture = TestBed.createComponent(StockComponent);
    const stock = fixture.componentInstance;
    expect(stock.title).toEqual('angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(StockComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular stock is running!');
  });
});
