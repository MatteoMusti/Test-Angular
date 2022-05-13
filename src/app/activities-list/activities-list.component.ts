import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../models/activity';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {

  @Input() activities: any[] = [];

  selectedActivity: any

  constructor() { }

  ngOnInit(): void {
  }

  // getPrice() {
  //   if(this.selectedActivity.price == 0){
  //     return 'Gratis'
  //   }
  //   if(this.selectedActivity.price > 0 && this.selectedActivity.price < 0.5){
  //     return 'Basso'
  //   }
  //   if(this.selectedActivity.price < 0 && this.selectedActivity.price < 1){
  //     return 'Medio'
  //   }
  //   if(this.selectedActivity.price == 1){
  //     return 'Alto'
  //   }
  // }

}
