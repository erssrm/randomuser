import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPageUserPage } from './modal-page-user';

@NgModule({
  declarations: [
    ModalPageUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPageUserPage),
  ],
})
export class ModalPageUserPageModule {}
