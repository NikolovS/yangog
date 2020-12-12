import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = (control.value as string);
    if (!value) { return null; }
    const isValidEmail = /^[a-zA-Z0-9\.-_]{6,}@\w+\.(com|bg)$/.test(value);
    return isValidEmail ? null : { emailValidator: true };
}


export function usernameValidator(control: AbstractControl): ValidationErrors | null {
    const value = (control.value as string);
    if (!value) { return null; }
    const isValidName = /^[a-z0-9]+$/i.test(value);
    return isValidName ? null : { usernameValidator: true };
}
