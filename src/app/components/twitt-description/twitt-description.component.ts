import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-twitt-description',
  templateUrl: './twitt-description.component.html',
  styleUrls: ['./twitt-description.component.css']
})
export class TwittDescriptionComponent implements OnInit {
  @Input()twitt: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.twitt);
  }

}
