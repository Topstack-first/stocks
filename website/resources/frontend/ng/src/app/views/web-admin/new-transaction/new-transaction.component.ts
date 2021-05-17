import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoBack()
  {
    this.router.navigate(["/webadmin"]);
  }
  onSubmit() {
    //this.dataService.sendTransaction(this.transactionForm.value).subscribe(result=>{
    //});
  }
}
