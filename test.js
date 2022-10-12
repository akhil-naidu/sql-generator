import SQLObject from './index.js';

const usersObject = new SQLObject('users');
const userSQL = usersObject
  .createColumn('name', 'TEXT')
  .addArg('NOT NUll')
  .generateSQL();

console.log(userSQL);
