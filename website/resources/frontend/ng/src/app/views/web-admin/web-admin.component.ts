import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-admin',
  templateUrl: './web-admin.component.html',
  styleUrls: ['./web-admin.component.css']
})
export class WebAdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoDashboard()
  {
      this.router.navigate(["/stock"]);

  }
}
