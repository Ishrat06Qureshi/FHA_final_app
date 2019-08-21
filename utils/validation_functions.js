import React from "react"
import validators from "./validations";
import {View , Text } from "react-native";

const  resetValidators = () => {
    Object.keys(validators).forEach((fieldName) => {
      validators[fieldName].errors = [];
      validators[fieldName].state = '';
      validators[fieldName].valid = false;
    });
  }
  

  const updateValidators = (fieldName, value) => {
    validators[fieldName].errors = [];
    validators[fieldName].state = value;
    validators[fieldName].valid = true;
    validators[fieldName].rules.forEach((rule) => {
      if (rule.test instanceof RegExp) {
        if (!rule.test.test(value)) {
          validators[fieldName].errors.push(rule.message);
          validators[fieldName].valid = false;
        }
      } else if (typeof rule.test === 'function') {
        if (!rule.test(value)) {
          validators[fieldName].errors.push(rule.message);
          validators[fieldName].valid = false;
        }
      }
    });
  }


  const displayValidationErrors = ( fieldName ) => {
    const validator =  validators[fieldName];
    const { errors } = validator
     return ( <Text style={{ 
       color:"red"  }}>
       {errors[0]}
       </Text>)
  }

 const  isFormValid = () => {
    let status = true;
    Object.keys(validators).forEach((field) => {
      if (!validators[field].valid) {

        console.log(validators[field].valid)
        status = false;
      }
    });
    return status;
  }

  const validation_functions = {
      resetValidators,
      updateValidators,
      displayValidationErrors,
      isFormValid
  }

  export default validation_functions