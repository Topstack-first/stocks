import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-new-briefcase',
  templateUrl: './new-briefcase.component.html',
  styleUrls: ['./new-briefcase.component.css']
})
export class NewBriefcaseComponent implements OnInit {
    submitForm: FormGroup;
  constructor(private router: Router,
    public fb: FormBuilder,
    private dataService:DataService) {
        this.submitForm = this.fb.group({
            order_number: [],
            state: [],
            product: [],
            ticket: [],
            derivative: [],
            lotaje: [],
            current_balance: [],
            investment: [],
            maintenance_margin: [],
            long_short: [],
            open_price: [],
            goal: [],
            stop_lost: [],
            operation_open_date: [],
          })
    }

  ngOnInit(): void {
  }
  gotoBack()
  {
    this.router.navigate(["/webadmin"]);
  }
  onSubmit() {
    this.dataService.postBriefcase(this.submitForm.value).subscribe(result=>{
        this.gotoBack();
    });
  }
}
