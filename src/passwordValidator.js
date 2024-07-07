export function isPasswordValid(password) {
    if (typeof password !== 'string' || password.length < 8) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    if (/[^a-zA-Z0-9]/.test(password)) return false;
  
    return true;
  }

  export default isPasswordValid;