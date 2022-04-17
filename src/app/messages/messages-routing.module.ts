
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageListComponent } from './message-list/message-list.component';
import { MessagesNewComponent } from './messages-new/messages-new.component';

const routes: Routes = [{
  path:'',
  component:MessageListComponent
},
{
  path:'new',
  component:MessagesNewComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
