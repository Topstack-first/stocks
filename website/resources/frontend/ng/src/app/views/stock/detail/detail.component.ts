import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { DetailItem } from './detail-item/detail-item';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detailItem:any = null;
  @Input()
  isSmallScreen:boolean;
  constructor(private dataService:DataService) { }
  domain =  ['#fd7e14','#866d27','#deaf22','#9c790d','#dadc3f','#83dc3f','#ea572a','#e81515','#36e3f5','#0687d2'];
  totalInvestment:any = 0;
  account_balance = 0;
  totalGD = 0;
  ngOnInit(): void {
    let domains = this.domain;
    this.dataService.getBriefcases().subscribe(result=>{
        console.log(result.data);
        this.data = [];
        let i = 0;

        result.data.forEach(item=>{
            this.totalInvestment+= item.investment + item.maintenance_margin;
            this.totalGD += item.current_balance - item.investment;


            let percent = (item.current_balance/(item.investment+item.maintenance_margin) )*100;
            let percentStr = percent.toFixed(1);
            this.data.push({
                Producto:item.product,
                Rotaje:item.lotaje,
                Estado:item.state,
                Derivado:item.derivative,
                SaldoActual:item.current_balance,
                Inversion:item.investment,
                MargenMantenimiento:item.maintenance_margin,
                BeneficioPerdida:(item.current_balance-item.investment).toFixed(2),
                percent:percentStr,
                LS:item.long_short,
                PercioApertura:item.open_price,
                Meta:item.goal,
                StopLost:item.stop_lost,
                FechaApertura:item.operation_open_date,
                NumeroOrden:item.order_number,
                color:domains[i % domains.length]
            })
            i++;
        });

    });
    let id = localStorage.getItem("id");
    this.dataService.getInvester(id).subscribe(
        result => {
            let investerInfo = result.data;
            this.account_balance = investerInfo.account_balance;
          },
          error => {
          },() => {
          }
    );
  }
  test(){
    console.log(this.detailItem);
  }
  data:DetailItem[]= [
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Rotaje:"20",
      Estado:"Activo",
      Derivado:"FT",
      SaldoActual:"7535.67",
      Inversion:"6473.89",
      MargenMantenimiento:"5400.00",
      BeneficioPerdida:"1061.78",
      percent:"8.9",

      LS:"LONG",
      PercioApertura:1458,
      Meta:1675,
      StopLost:20,
      FechaApertura:"05/05/2021",
      NumeroOrden:"OP1457857",
      color:'#fd7e14',
    },
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Rotaje:"21",
      Estado:"Activo",
      Derivado:"FT",
      SaldoActual:"7535.67",
      Inversion:"6473.89",
      MargenMantenimiento:"5400.00",
      BeneficioPerdida:"1061.78",
      percent:"8.9",

      LS:"LONG",
      PercioApertura:1458,
      Meta:1675,
      StopLost:20,
      FechaApertura:"05/05/2021",
      NumeroOrden:"OP1457857",
      color:'#fd7e14',
    },
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Rotaje:"22",
      Estado:"Activo",
      Derivado:"FT",
      SaldoActual:"7535.67",
      Inversion:"6473.89",
      MargenMantenimiento:"5400.00",
      BeneficioPerdida:"1061.78",
      percent:"8.9",

      LS:"LONG",
      PercioApertura:1458,
      Meta:1675,
      StopLost:20,
      FechaApertura:"05/05/2021",
      NumeroOrden:"OP1457857",
      color:'#fd7e14',
    },
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Rotaje:"23",
      Estado:"Activo",
      Derivado:"FT",
      SaldoActual:"7535.67",
      Inversion:"6473.89",
      MargenMantenimiento:"5400.00",
      BeneficioPerdida:"1061.78",
      percent:"8.9",

      LS:"LONG",
      PercioApertura:1458,
      Meta:1675,
      StopLost:20,
      FechaApertura:"05/05/2021",
      NumeroOrden:"OP1457857",
      color:'#fd7e14',
    },
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Rotaje:"24",
      Estado:"Activo",
      Derivado:"FT",
      SaldoActual:"7535.67",
      Inversion:"6473.89",
      MargenMantenimiento:"5400.00",
      BeneficioPerdida:"1061.78",
      percent:"8.9",

      LS:"LONG",
      PercioApertura:1458,
      Meta:1675,
      StopLost:20,
      FechaApertura:"05/05/2021",
      NumeroOrden:"OP1457857",
      color:'#fd7e14',
    },
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Rotaje:"20",
      Estado:"Activo",
      Derivado:"FT",
      SaldoActual:"7535.67",
      Inversion:"6473.89",
      MargenMantenimiento:"5400.00",
      BeneficioPerdida:"1061.78",
      percent:"8.9",

      LS:"LONG",
      PercioApertura:1458,
      Meta:1675,
      StopLost:20,
      FechaApertura:"05/05/2021",
      NumeroOrden:"OP1457857",
      color:'#fd7e14',
    },

  ]
}
