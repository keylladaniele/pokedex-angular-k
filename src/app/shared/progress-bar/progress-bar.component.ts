import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() color = 'blue';
  @Input() value = 0;
  @Input() height = 20;

  constructor() { }

  ngOnInit(): void {
  }

}