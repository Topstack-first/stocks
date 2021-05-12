import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.scss']
})
export class BriefcaseComponent implements OnInit {
  public investerInfo:any = null;
  public calcStr = "";
  public data: any[] = [
    {
      "name": "MU",
      "value": 21.3
    },
    {
      "name": "USD",
      "value": 18.0
    },
    {
      "name": "GS",
      "value": 11.0
    },
    {
      "name": "AAPL",
      "value": 9.7
    },
    {
      "name": "V",
      "value": 8.6
    },
    {
      "name": "WMT",
      "value": 7.8
    },
    {
      "name": "INTC",
      "value": 7.1
    },
    {
      "name": "XOM",
      "value": 6.1
    },
    {
      "name": "BA",
      "value": 5.7
    },
    {
      "name": "CSCO",
      "value": 4.7
    }
  ];
  public showLegend = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#f16311','#dc873f','#dca43f','#dcb33f','#dadc3f','#83dc3f','#ea572a','#e81515','#36e3f5','#0687d2']
  };
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = true;
  public chartWidth = 380;
  public chartHeight = 380;


  constructor(private dataService:DataService) {

   }

  ngOnInit(): void {
      let id = localStorage.getItem("id");
    this.dataService.getInvester(id).subscribe(
        result => {
            this.investerInfo = result.data;
            this.calcStr = "";
            let subBalance = result.data.account_balance - result.data.open_balance;
            let percent = (subBalance / result.data.open_balance ) * 100;
            let subBalanceStr = subBalance.toFixed(2);
            let percentStr = percent.toFixed(2);
            if(subBalance >= 0)
            {
                this.calcStr += "+"+subBalanceStr+" (+"+percentStr+" %)";
            }
            else{
                this.calcStr += subBalanceStr+" ("+percentStr+" %)";
            }
          },
          error => {
          },() => {
          }
    );
  }
  onSelect(event: any) {
    console.log(event);
  }


}
