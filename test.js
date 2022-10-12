import SQLObject from './index.js';

const usersObject = new SQLObject('users');
const userSQL = usersObject.createColumn('id', 'INT').generateSQL();

console.log(userSQL);
