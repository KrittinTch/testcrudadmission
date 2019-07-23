import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';
import { AddstudentdialogComponent } from '../addstudentdialog/addstudentdialog.component';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  students = [];
 
  constructor(private http : HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.getData()
    
  }
  getData() {
    this.http.get("http://localhost:3000/api/admissions").subscribe((res: any) => {
    this.students = res.data;
    
    })
  }

  saveData(data : any) {
    this.http.post("http://localhost:3000/api/admissions", data).subscribe((res: any) => {
    this.students = res.data;
    
    this.getData();
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddstudentdialogComponent, {
      width: '800px',
      // data : this.addStudent()
    });

    dialogRef.afterClosed().subscribe(result => {
     console.log("dialog : " + result);
     this.saveData(result);
    });
  }

}
