import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-briefcase',
  templateUrl: './new-briefcase.component.html',
  styleUrls: ['./new-briefcase.component.css']
})
export class NewBriefcaseComponent implements OnInit {

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
