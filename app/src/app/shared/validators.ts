import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = (control.value as string);
    if (!value) { return null; }
    console.log('control', value)
    const isValidEmail = /^[a-zA-Z0-9\.-_]{6,}@\w+\.(com|bg)$/.test(value);
    return isValidEmail ? null : { emailValidator: true };
}


export function usernameValidator(control: AbstractControl): ValidationErrors | null {
    const value = (control.value as string);
    if (!value) { return null; }
    console.log('control', value)

    const isValidName = /^[a-z0-9]+$/i.test(value);
    console.log('isValidName', isValidName)
    return isValidName ? null : { usernameValidator: true };
}


// export function MustMatch(controlName: string, matchingControlName: string): any {
//     return (formGroup: FormGroup): null | void => {
//         const control = formGroup.controls[controlName];
//         const matchingControl = formGroup.controls[matchingControlName];
//         if (!control || !matchingControl) { return null; }
//         if (matchingControl.errors && !matchingControl.errors.mustMatch) { return null; }
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ mustMatch: true });
//         } else {
//             matchingControl.setErrors({ mustMatch: false });
//         }
//     }
// }

