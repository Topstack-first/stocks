import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { HistoryItem } from './history-item/history-item';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getBriefcases().subscribe(result=>{
        this.data = [];
        let i = 0;
        this.originData = [];
        result.data.forEach(item=>{

            let percent = (item.current_balance/(item.investment+item.maintenance_margin) )*100;
            let percentStr = percent.toFixed(1);
            this.originData.push({
                Producto:item.product,
                Estado:item.state,
                FechaApertura:item.operation_open_date,
                FechaCierre:item.operation_close_date,
                BeneficioPerdida:(item.current_balance-item.investment).toFixed(2),
                percent:percentStr
            })
            i++;
        });
        this.data = this.originData;

    });
  }
  search(event:any)
  {
    let searchStr:any = event.target.value;
    this.data = this.originData.filter((item)=>{
      return item.Producto.includes(searchStr) ||
      item.Estado.includes(searchStr) ||
      item.FechaApertura.includes(searchStr) ||
      item.FechaCierre.includes(searchStr) ||
      item.BeneficioPerdida.includes(searchStr) ||
      item.percent.includes(searchStr);
    });
  }

  data:any;
  originData:HistoryItem[]= [
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Estado:"Activo",
      FechaApertura:"15/01/202",
      FechaCierre:"05/05/202",
      BeneficioPerdida:"1061.78",
      percent:"8.9"
    },
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Estado:"Activo",
      FechaApertura:"15/01/202",
      FechaCierre:"05/05/202",
      BeneficioPerdida:"1061.78",
      percent:"8.9"
    },
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Estado:"Activo",
      FechaApertura:"15/01/202",
      FechaCierre:"05/05/202",
      BeneficioPerdida:"1061.78",
      percent:"8.9"
    },
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Estado:"Activo",
      FechaApertura:"15/01/202",
      FechaCierre:"05/05/202",
      BeneficioPerdida:"1061.78",
      percent:"8.9"
    },
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Estado:"Activo",
      FechaApertura:"15/01/202",
      FechaCierre:"05/05/202",
      BeneficioPerdida:"1061.78",
      percent:"8.9"
    },
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Estado:"Activo",
      FechaApertura:"15/01/202",
      FechaCierre:"05/05/202",
      BeneficioPerdida:"1061.78",
      percent:"8.9"
    },
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Estado:"Activo",
      FechaApertura:"15/01/202",
      FechaCierre:"05/05/202",
      BeneficioPerdida:"1061.78",
      percent:"8.9"
    },
    {
      Producto:"Goldman Sachs Group Inc (GS)",
      Estado:"Activo",
      FechaApertura:"15/01/202",
      FechaCierre:"05/05/202",
      BeneficioPerdida:"1061.78",
      percent:"8.9"
    },


  ]
}
