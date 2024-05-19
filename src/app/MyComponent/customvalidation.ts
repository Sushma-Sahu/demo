import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

// Custom validator function to compare two form control values
export function compareValidator(controlName: string, matchingControlName: string) {
  return function (form: AbstractControl) {
    const passwordValue = form.get(controlName)?.value
    const confirmPasswordValue = form.get(matchingControlName)?.value
    // console.log("this is custom vali",passwordValue , confirmPasswordValue)
    if (passwordValue === confirmPasswordValue) {
      return null;
    }
    return { passwordMismatchError: true }
  }
}