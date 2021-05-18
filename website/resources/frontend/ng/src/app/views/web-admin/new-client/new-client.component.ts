import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
    selector: 'app-new-client',
    templateUrl: './new-client.component.html',
    styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
    submitForm: FormGroup;
    constructor(
        private router: Router,
        public fb: FormBuilder,
        private dataService:DataService) {
            this.submitForm = this.fb.group({
                name: [],
                first_name: [],
                last_name: [],
                document_type: [],
                document_name: [],
                nation: [],
                residence_country: [],
                //town: [],
                birthday: [],
                address: [],
                phone: [],
                email: [],
                //account_type: [],
                account_number: [],
                account_open_date: [],
                open_balance: [],
                //account_balance: [],
                last_fund_date: [],
                password: []
              })
    }

    ngOnInit(): void {
    }
    gotoBack() {
        this.router.navigate(["/webadmin"]);
    }
    onSubmit() {
        console.log(this.submitForm.value);
        this.dataService.postUser(this.submitForm.value).subscribe(result=>{
            this.gotoBack();
        });
    }
}
