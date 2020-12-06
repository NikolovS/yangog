import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from './email-validator.directive';
import { UsernameValidatorDirective } from './username.directive';


@NgModule({
  declarations: [EmailValidatorDirective, UsernameValidatorDirective,],
  imports: [
    CommonModule
  ],
  exports: [
    EmailValidatorDirective,
    UsernameValidatorDirective,

  ]
})
export class SharedModule { }
