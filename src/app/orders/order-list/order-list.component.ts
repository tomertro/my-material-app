import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

const ELEMENT_DATA = [{
  orderDate: new Date(),
  orderNumber:100,
  total:29.99,
  description: '2lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:101,
  total:39.99,
  description: '5lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:102,
  total:59.99,
  description: '1lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:100,
  total:29.99,
  description: '2lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:101,
  total:39.99,
  description: '5lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:102,
  total:59.99,
  description: '1lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:100,
  total:29.99,
  description: '2lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:101,
  total:39.99,
  description: '5lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:102,
  total:59.99,
  description: '1lbs of tuna',
  isChecked:false
},{
  orderDate: new Date(),
  orderNumber:100,
  total:29.99,
  description: '2lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:101,
  total:39.99,
  description: '5lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:102,
  total:59.99,
  description: '1lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:100,
  total:29.99,
  description: '2lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:101,
  total:39.99,
  description: '5lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:102,
  total:59.99,
  description: '1lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:100,
  total:29.99,
  description: '2lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:101,
  total:39.99,
  description: '5lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:102,
  total:59.99,
  description: '1lbs of tuna',
  isChecked:false
},{
  orderDate: new Date(),
  orderNumber:100,
  total:29.99,
  description: '2lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:101,
  total:39.99,
  description: '5lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:102,
  total:59.99,
  description: '1lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:100,
  total:29.99,
  description: '2lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:101,
  total:39.99,
  description: '5lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:102,
  total:59.99,
  description: '1lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:100,
  total:29.99,
  description: '2lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:101,
  total:39.99,
  description: '5lbs of tuna',
  isChecked:false
},
{
  orderDate: new Date(),
  orderNumber:102,
  total:59.99,
  description: '1lbs of tuna',
  isChecked:false
}]

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})


export class OrderListComponent implements OnInit {
  pageIndex = 0;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[]= [1,2,5,10]
  displayedColums:string [] = ['action','orderNumber','orderDate','description','total'];
  dataSource: MatTableDataSource<object>;
  @ViewChild('matSort', { read: MatSort, static: true }) matSort: MatSort;

  pageEvent: PageEvent;
  constructor() { }

  
  ngOnInit(): void {
    debugger;
    this.loadData(0,this.pageSize);
    this.dataSource.sort = this.matSort
  }
  loadData(pageIndex, pageSize) {
   this.dataSource = new MatTableDataSource<object>(ELEMENT_DATA.slice(pageIndex,pageIndex + pageSize));
  }
  selectAll(){
    for(var elm of ELEMENT_DATA){
      elm.isChecked = !elm.isChecked
    }

  }

  onPageChange(e){
    debugger;
    const previousPageIndex = e.previousPageIndex;
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize
    this.loadData(this.pageIndex,this.pageSize)



  }

}


