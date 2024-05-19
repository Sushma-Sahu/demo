import { pipe } from 'rxjs';
import { CheckGenderPipe } from './check-gender.pipe';

describe('CheckGenderPipe All test cases check for custom pipes', () => {
  it('create an instance', () => {
    // Arrange & Act
    const pipe = new CheckGenderPipe();
    // Assert
    expect(pipe).toBeTruthy();
  });

  it('check method is created or not ', () => {
    // Arrange & Act
    let pipest = new CheckGenderPipe();
    // Assert
    expect(pipest.transform).toBeDefined()
  })
  // it('check method is created or not', ()=>{
  //   let pipest = new CheckGenderPipe();
  //   expect(pipest.transform).toBeDefined()
  // })
  it('check method is working as expected with female value or not', () => {
    // Arrange & Act
    let pipest = new CheckGenderPipe();
    // Assert
    expect(pipest.transform('sushma', 'female')).toBe('Miss. sushma')
  })
  it('check method is working as expected with male value or not', () => {
    // Arrange & Act
    let pipest = new CheckGenderPipe();
    // Assert
    expect(pipest.transform('Manish', 'male')).toBe('Mr Manish')
  })
  it('check tranform function if we pass Empty gender value', () => {
    // Arrange & Act
    let pipest = new CheckGenderPipe();
    // Assert
    expect(pipest.transform('sushma', '')).toBe('Something Went Wrong')
  })
  it('check tranform function if we pass Wrong gender value', () => {
    // Arrange & Act
    let pipest = new CheckGenderPipe();
    // Assert
    expect(pipest.transform('sushma', 'others')).toBe('sushma')
  })
  it('check tranform function if we pass not pass value name', () => {
    // Arrange & Act
    let pipest = new CheckGenderPipe();
    // Assert
    expect(pipest.transform('', 'female')).toBe('Please Add Name')
  })
  it('check tranform function if we pass not pass value name and gender', () => {
    // Arrange & Act
    let pipest = new CheckGenderPipe();
    // Assert
    expect(pipest.transform('', '')).toBe('Something Went Wrong')
  })
});
