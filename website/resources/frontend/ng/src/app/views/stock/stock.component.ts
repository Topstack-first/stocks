import { BreakpointObserver } from '@angular/cdk/layout';
import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'stock-root',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent  implements OnInit {

  title = 'angular';
  isSmallScreen:boolean = false;

  constructor(
      private breakpointObserver:BreakpointObserver,
      private tokenService:TokenService,
      private router:Router
      ){

  }
  ngOnInit(): void {

    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    if(!this.tokenService.isLoggedIn())
    {
        this.router.navigate(["/login"]);
    }
  }

}
