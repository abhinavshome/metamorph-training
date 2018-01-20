import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() done: number;
  @Input() inProgress: number;

  constructor() { }

  ngOnInit() {
  }

}
