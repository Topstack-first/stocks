import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
    submitForm: FormGroup;
  constructor(
    private router: Router,
    public fb: FormBuilder,
    private dataService:DataService
  ) {
    this.submitForm = this.fb.group({
        investor_id: [localStorage.getItem("id")],
        request_type: [],
        application_date: [],
        currency: [],
        amount: [],
        comment: [],
        beneficiary_account_number: [],
        beneficiary_address: [],
        beneficiary_bank_name: [],
        swift_bank: [],
        beneficiary_bank_address: [],
      })
   }

  ngOnInit(): void {
  }
  gotoBack()
  {
    this.router.navigate(["/webadmin"]);
  }
  onSubmit() {
    this.dataService.postTransaction(this.submitForm.value).subscribe(result=>{
        this.gotoBack();
    });
  }
}
