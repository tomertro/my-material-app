import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.scss']
})
export class OrderNewComponent implements OnInit {

  minDate = new Date();
  dateControl:FormControl
  constructor() { }

  ngOnInit(): void {
    this.dateControl = new FormControl('',[Validators.required])
  }

}
