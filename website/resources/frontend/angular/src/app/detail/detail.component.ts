import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { DetailItem } from './detail-item/detail-item';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  selectedItem:any = null;
  constructor() { }

  ngOnInit(): void {
  }
  onDetailView(data:any, detailView)
  {
    this.selectedItem = data;
    console.log(detailView)
    detailView.toggle(true);
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
      NumeroOrden:"OP1457857"
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
      NumeroOrden:"OP1457857"
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
      NumeroOrden:"OP1457857"
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
      NumeroOrden:"OP1457857"
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
      NumeroOrden:"OP1457857"
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
      NumeroOrden:"OP1457857"
    },
    
  ]
}
