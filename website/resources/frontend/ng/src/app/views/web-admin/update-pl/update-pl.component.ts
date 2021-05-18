import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-update-pl',
  templateUrl: './update-pl.component.html',
  styleUrls: ['./update-pl.component.css']
})
export class UpdatePlComponent implements OnInit {
  submitForm: FormGroup;
  constructor(private router:Router,
        public fb: FormBuilder,
        private dataService:DataService) {
            this.submitForm = this.fb.group({
                account_value: [],
              })
        }

  ngOnInit(): void {
  }
  gotoBack()
  {
    this.router.navigate(["/webadmin"]);
  }
  onSubmit() {
      this.gotoBack();
    //this.dataService.sendTransaction(this.transactionForm.value).subscribe(result=>{
    //});
  }
}
