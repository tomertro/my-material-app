import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rep-dialog',
  templateUrl: './rep-dialog.component.html',
  styleUrls: ['./rep-dialog.component.scss']
})
export class RepDialogComponent implements OnInit {

  constructor() { }
  rep:string;
  ngOnInit(): void {
  }

}
