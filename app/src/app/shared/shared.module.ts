import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from './email-validator.directive';
import { UsernameValidatorDirective } from './username.directive';
import { TimeDiffPipe } from './time-diff.pipe';


@NgModule({
  declarations: [
    EmailValidatorDirective,
    UsernameValidatorDirective,
    TimeDiffPipe],
  imports: [
    CommonModule
  ],
  exports: [
    EmailValidatorDirective,
    UsernameValidatorDirective,
    TimeDiffPipe

  ]
})
export class SharedModule { }
