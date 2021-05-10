import { BreakpointObserver } from '@angular/cdk/layout';
import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'stock-root',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent  implements OnInit {

  title = 'angular';
  isSmallScreen:boolean = false;

  constructor(private breakpointObserver:BreakpointObserver){

  }
  ngOnInit(): void {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
  }
  
}
