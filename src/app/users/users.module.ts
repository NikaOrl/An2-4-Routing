import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, UsersRoutingModule],
  declarations: [UserComponent]
})
export class UsersModule {}
