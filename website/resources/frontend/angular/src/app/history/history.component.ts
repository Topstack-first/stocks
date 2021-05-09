import { Component, OnInit } from '@angular/core';
import { HistoryItem } from './history-item/history-item';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.data = this.originData;
  }
  search(event:any)
  {
    let searchStr:any = event.target.value;
    this.data = this.originData.filter((item)=>{
      return item.BeneficioPerdida.includes(searchStr);
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
