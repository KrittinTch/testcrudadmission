import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AdmissionComponent } from '../admission/admission.component';

@Component({
  selector: 'app-addstudentdialog',
  templateUrl: './addstudentdialog.component.html',
  styleUrls: ['./addstudentdialog.component.scss']
})
export class AddstudentdialogComponent implements OnInit {

  student= {
    fullname: "",
      pid: "",
      telno: "",
  };

  constructor(public dialogRef : MatDialogRef<AdmissionComponent>) { }

  ngOnInit() {
  }
 
  closeDialogSave() {
    this.dialogRef.close(this.student);
  }

  closeDialog() {
    this.dialogRef.close();
  }


}
