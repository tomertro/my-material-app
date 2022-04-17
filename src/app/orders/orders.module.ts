import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter'; 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { OrderNewComponent } from './order-new/order-new.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [OrderListComponent, TestComponentComponent, OrderNewComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    OrdersRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatMomentDateModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatPaginatorModule
  ]
})
export class OrdersModule { }
