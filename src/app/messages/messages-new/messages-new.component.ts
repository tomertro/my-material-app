import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-new',
  templateUrl: './messages-new.component.html',
  styleUrls: ['./messages-new.component.scss']
})
export class MessagesNewComponent implements OnInit {

  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;
  priorities:string[] = ['High','Medium','Low'];
  departments:object[] = [
    {
      id:1,
      name:'Complains'
    },
    {
      id:2,
      name:'Loayalty'
    },
    {
      id:3,
      name:'Promotions'
    }
  ];

  constructor(private formBuilder:FormBuilder) {

   }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({emailCtrl:['',Validators.required],priorityCtrl:['',Validators.required],departmentCtrl:['',Validators.required]});
    this.secondFormGroup = this.formBuilder.group({messageCtrl:['',Validators.required]});
  }
  getDepartmentName(department:object){
    return department? department['name'] :undefined;
  }
}
