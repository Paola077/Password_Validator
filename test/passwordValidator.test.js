import passwordValidator from '../src/passwordValidator';

describe('Password Validator', () => {
  it('should return false for passwords shorter than 8 characters', () => {
    expect(isPasswordValid('Ab1')).toBe(false);
  });

  it('should return false for passwords without uppercase letters', () => {
    expect(isPasswordValid('abcdefg1')).toBe(false);
  });

  it('should return false for passwords without lowercase letters', () => {
    expect(isPasswordValid('ABCDEFG1')).toBe(false);
  });

  it('should return false for passwords without numbers', () => {
    expect(isPasswordValid('Abcdefgh')).toBe(false);
  });

  it('should return false for passwords with non-alphanumeric characters', () => {
    expect(isPasswordValid('Abcdefg1!')).toBe(false);
  });

  it('should return true for valid passwords', () => {
    expect(isPasswordValid('Abcdefg1')).toBe(true);
  });
});


