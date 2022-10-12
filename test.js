import SQLObject from './index.js';

const usersObject = new SQLObject('users');
const userSQL = usersObject
  .createColumn('id', 'INT')
  .addArgs(['NOT NULL', 'AUTO_INCREMENT'])
  .createColumn('name', 'TEXT')
  .addArg('NOT NUll')
  .generateSQL();

console.log(userSQL);
