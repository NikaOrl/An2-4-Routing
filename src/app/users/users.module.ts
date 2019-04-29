import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UsersRoutingModule,
  usersRouterComponents
} from './users-routing.module';
import { UserComponent } from './components';
import { FormsModule } from '@angular/forms';
import { UsersServicesModule } from './users-services.module';

@NgModule({
  imports: [CommonModule, FormsModule, UsersRoutingModule, UsersServicesModule],
  declarations: [UserComponent, usersRouterComponents]
})
export class UsersModule {}
