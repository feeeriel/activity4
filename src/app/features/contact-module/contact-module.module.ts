import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactModuleRoutingModule } from './contact-module-routing.module';
import { ContactComponent } from '../../components/contact/contact.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactModuleRoutingModule
  ]
})
export class ContactModuleModule { }
