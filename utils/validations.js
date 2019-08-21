import * as EmailValidator from 'email-validator';

const validators = {
    email: {
      rules: [

        {
          test: (value) => {
            return value.length
          },
          message: 'Email is mandatory',
        },
        
        {
          test: (value) => {
            return EmailValidator.validate( value ) 
          },
          message: 'Email is invalid',
        },
       
        
      ],
      errors: [],
      valid: false,
      state: '',
    },
    password: {
      rules: [
        {
          test: (value) => {
            return value.length 
          },
          message: 'password is mandatory',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
    firstName: {
      rules: [
        {
          test: (value) => {
            return value.length 
          },
          message: 'first name  is required',
        },
        {
          test: /^[a-zA-Z\s]+$/,
          message: 'first Name can only contain alphabets',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
    lastName: {
      rules: [
        {
          test: (value) => {
            return value.length 
          },
          message: 'last name  is required',
        },
        {
          test: /^[a-zA-Z\s]+$/,
          message: 'last Name can only contain alphabets',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
    phoneNumber: {
      rules: [
        {
          test: (value) => {
            return value.length
          },
          message: 'Phone Number is required',
        },
        
        {
          test: (value) => {
            return value.length  === 10
          },
          message: 'Phone Number is not valid',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
  };
  
  export default validators;