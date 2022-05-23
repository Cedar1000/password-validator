import isUpper from './containsUpperCass';

class Validate {
  constructor(field, value, errorObj) {
    this.field = field;
    this.value = value;
    this.errorObj = errorObj;
  }

  checkLength() {
    if (this.value.length > 0 && this.value.length < 8) {
      this.errorObj[this.field] = 'Should be a minimum of 8 characters!';
      return;
    } else {
      this.errorObj[this.field] = '';
      this.checkUpperCase();
    }

    return this;
  }

  checkUpperCase() {
    if (!isUpper(this.value)) {
      this.errorObj[this.field] = 'Must Contain An Uppercase Character!';
    } else {
      this.errorObj[this.field] = '';
      this.containsSpecialChars();
    }

    return this;
  }

  containsSpecialChars() {
    //eslint-disable-next-line
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!specialChars.test(this.value)) {
      this.errorObj[this.field] = 'Must Contain A Special Character!';
    } else {
      this.errorObj[this.field] = '';
    }
  }

  passwordMatch(password, passwordConfirm) {
    if (password !== passwordConfirm) {
      this.errorObj.passwordConfirm = `Passwords Don't match!`;
    } else {
      this.errorObj.passwordConfirm = '';
    }
  }
}

export default Validate;
