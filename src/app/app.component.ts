import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {MatSort, Sort} from '@angular/material/sort';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog"
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'products-table';
  public data:any = []
  columnsToDisplay = ['ID','Title','Category','Description','Brand','Discount Percentage','Image','Price','Rating','Stock','Sales','Button'];

  constructor(public http: HttpClient,private dialog:MatDialog) {
   
 }
 

 getData(){
   const url ='https://dummyjson.com/products'
   this.http.get(url).subscribe((res:any)=>{
     this.data = res
     this.data = this.data.products
     this.data.map(function (element: { sales: number; }) {});
     this.data.map(function (element: { explanation: string; }) {});
     console.log(this.data)
   })
 }

 ngOnInit(): void {
   this.getData()
 }

 onOpenDialogClick(rowID:number,rowTitle:string,row:any){
  const dialogRef =this.dialog.open(DialogComponent,
    {
      data: [rowID,rowTitle]
      
    });
  const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      rowID: rowID,
      rowTitle: rowTitle
    };
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data)
        row.sales=data.sales;
        row.description=data.explanation;
      }
    );
   
 }
}
