import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivityService } from '../service/activity.service';
import { Activity } from '../models/activity';


@Component({
  selector: 'app-activity-search',
  templateUrl: './activity-search.component.html',
  styleUrls: ['./activity-search.component.css']
})
export class ActivitySearchComponent implements OnInit {
  public activityTypes: string[] = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

  searchedActivities: any[] = []
  // @Output() searchedActivity = new EventEmitter<Activity>();

  public activityForm = this.fb.group({
    tipo: ['Seleziona un tipo', Validators.required],
    partecipanti: ['', Validators.required],
    prezzo: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private activityServ: ActivityService) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.activityForm.value);
    this.activityServ.getActivity(this.tipo.value, this.partecipanti.value, this.prezzo.value).subscribe(data => {
      this.searchedActivities.push(data);
    })
  }

  get tipo(): AbstractControl {
    return this.activityForm.get('tipo') as AbstractControl;
  }

  get partecipanti(): AbstractControl {
    return this.activityForm.get('partecipanti') as AbstractControl;
  }

  get prezzo(): AbstractControl {
    return this.activityForm.get('prezzo') as AbstractControl;
  }

}
