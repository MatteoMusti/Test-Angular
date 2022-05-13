import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  @Input() activity: any

  constructor() { }

  ngOnInit(): void {
  }

}
