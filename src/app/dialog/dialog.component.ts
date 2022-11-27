import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})



export class DialogComponent implements OnInit {
  
  form: FormGroup;
  sales:String;
  explanation:String;

  constructor(
    private fb: FormBuilder,
    private dialogRef: 
    MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) 
  {
    this.sales=data.rowTitle;
    this.explanation=data.rowTitle
    this.form=fb.group({
      sales: this.sales,
      explanation: this.explanation
    })
  }

  ngOnInit(): void {
  }
  saveDialog(){

    this.dialogRef.close(this.form.value);
  }

}
