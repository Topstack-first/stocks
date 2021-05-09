import { Component, OnInit } from '@angular/core';
import { DetailItem } from './detail-item/detail-item';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
      percent:"8.9"
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
      percent:"8.9"
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
      percent:"8.9"
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
      percent:"8.9"
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
      percent:"8.9"
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
      percent:"8.9"
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
      percent:"8.9"
    }
    
  ]
}
