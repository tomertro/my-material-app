import { FormControl, Validators } from '@angular/forms';
import { Component, Injectable, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss']
})
export class CustomerNewComponent implements OnInit {
  eamilFormControl:FormControl;
  constructor(public dialog:MatDialog,public snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.eamilFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
  }
  openRepDialog(){
    
    const dialogRef = this.dialog.open(RepDialogComponent,{with:'250px'} as MatDialogConfig);
    dialogRef.afterClosed().subscribe(result=>{
      alert(`User chose ${result}`)
    });
  }
  openUndoSnackBar(){
    const snackbarRef = this.snackbar.open('Customer saved','UNDO',{horizontalPosition:'end'});
    snackbarRef.onAction().subscribe(()=>{alert('Undo that save!!')});
  }

}
