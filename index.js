class JassCheckChecker {
    constructor() {
      this.dataStore = {};
    }
  
    setData(key, value) {
      this.dataStore[key] = value;
      console.log(`Set data for key '${key}':`, value);
    }
  
    getData(key) {
      const value = this.dataStore[key];
      console.log(`Retrieved data for key '${key}':`, value);
      return value;
    }
  
    checkString(value) {
      return typeof value == 'string';
    }
  
    checkNumber(value) {
      return typeof value === 'number';
    }
  
    checkBoolean(value) {
      return typeof value === 'boolean';
    }
  
    checkArray(value) {
      return Array.isArray(value);
    }
  
    checkObject(value) {
      return typeof value === 'object' && !Array.isArray(value);
    }
  
    checkCustom(/* Add your custom validation logic here */) {
      // Example: Check if a number is greater than 10
      return value > 10;
    }
  }
  
  // Example usage:
  const jassCheckChecker = new JassCheckChecker();
  
  jassCheckChecker.setData('name', 'John Doe');
  jassCheckChecker.setData('age', 30);
  jassCheckChecker.setData('isStudent', false);
  
  const nameIsValid = jassCheckChecker.checkString(jassCheckChecker.getData('name'));
  const ageIsValid = jassCheckChecker.checkNumber(jassCheckChecker.getData('age'));
  const isStudentIsValid = jassCheckChecker.checkBoolean(jassCheckChecker.getData('isStudent'));
  
  console.log('Name is valid:', nameIsValid);
  console.log('Age is valid:', ageIsValid);
  console.log('Is Student is valid:', isStudentIsValid);
  