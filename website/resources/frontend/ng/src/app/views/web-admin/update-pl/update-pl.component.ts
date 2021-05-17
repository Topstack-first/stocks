import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-pl',
  templateUrl: './update-pl.component.html',
  styleUrls: ['./update-pl.component.css']
})
export class UpdatePlComponent implements OnInit {

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
