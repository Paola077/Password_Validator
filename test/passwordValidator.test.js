import passwordValidator from '../src/passwordValidator';

describe('Password Validator', () => {
  it('should return false for passwords shorter than 8 characters', () => {
    expect(passwordValidator('Ab1')).toBe(false);
  });

  it('should return false for passwords without uppercase letters', () => {
    expect(passwordValidator('abcdefg1')).toBe(false);
  });

  it('should return false for passwords without lowercase letters', () => {
    expect(passwordValidator('ABCDEFG1')).toBe(false);
  });

  it('should return false for passwords without numbers', () => {
    expect(passwordValidator('Abcdefgh')).toBe(false);
  });

  it('should return false for passwords with non-alphanumeric characters', () => {
    expect(passwordValidator('Abcdefg1!')).toBe(false);
  });

  it('should return true for valid passwords', () => {
    expect(passwordValidator('Abcdefg1')).toBe(true);
  });
});


