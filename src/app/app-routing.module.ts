import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

const routes:Routes = [{
    path:'customers',
    //lazy loading of module
    loadChildren:()=>import('./customers/customers.module').then(m=>m.CustomersModule)
},
{
    path:'orders',
    //lazy loading of module
    loadChildren:()=>import('./orders/orders.module').then(m=>m.OrdersModule)
},
{
    path:'messages',
    //lazy loading of module
    loadChildren:()=>import('./messages/messages.module').then(m=>m.MessagesModule)
},

{
    //default path
    path:'',
    redirectTo:'',
    pathMatch:'full'
},

];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
