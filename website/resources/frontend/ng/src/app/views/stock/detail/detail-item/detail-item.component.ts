import { Component, Input, OnInit } from '@angular/core';
import { DetailItem } from './detail-item';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {
  @Input()
  data:DetailItem | any;
  @Input()
  detailView:any;
  @Input()
  parentView:any;
  constructor() { }

  barStyle:string = "";
  ngOnInit(): void {
    this.barStyle = "background-color: "+this.data.color+";width: 80%;text-align:center;";
  }
  onDetailParentView(){
    this.parentView.detailItem = this.data;
    this.detailView.toggle();
  }
}
