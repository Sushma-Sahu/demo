import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkGender'
})
export class CheckGenderPipe implements PipeTransform {

  transform(value: string, Gender: string): string {
    if (Gender.length > 0) {
      if (value.length > 0) {
        if (Gender.toLowerCase() == 'male') {
          return "Mr " + value;
        } else if (Gender.toLowerCase() == 'female') {
          return "Miss. " + value;
        } else {
          return value;
        }
      }
      return 'Please Add Name'
    }
    return 'Something Went Wrong'
  }
}
