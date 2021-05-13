import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
    transactionForm: FormGroup;
  constructor(
      private router:Router,
      public fb: FormBuilder,
      private dataService:DataService) {
    this.transactionForm = this.fb.group({
        invester_id: [localStorage.getItem("id")],
        email: [''],
        password: [''],
        password_confirmation: ['']
      })
   }

  ngOnInit(): void {
  }
  toDashboard()
  {
    this.router.navigate(["/stock"]);
  }
  onSubmit() {
    this.dataService.sendTransaction(this.transactionForm.value).subscribe(result=>{
    });
  }
}
