class SQL {
  constructor(
    tableName,
    SQLType = 'create',
    {
      columns = [
        {
          id: 1,
          name: 'id',
          type: 'INT',
          args: ['NOT NULL'],
        },
      ],
    } = {},
  ) {
    this.tableName = tableName;
    this.SQLType = SQLType;
    this.columns = columns;
  }
}

class SQLObject {
  constructor(tableName) {
    this.SQL = new SQL(tableName);
  }

  setSQLType(SQLtype) {
    this.SQL.SQLtype = SQLtype;
    return this;
  }

  createColumn(name, type) {
    this.SQL.columns.push({
      id: this.SQL.columns.length + 1,
      name,
      type,
      args: [],
    });
    return this;
  }

  addArg(arg) {
    this.SQL.columns.at(-1).args.push(arg);
    return this;
  }

  addArgs(args) {
    this.SQL.columns.at(-1).args.push(...args);
    return this;
  }

  build() {
    return this.SQL;
  }

  generateSQL() {
    if (this.SQL.SQLType === 'create') {
      const sqlInBrackets =
        this.SQL.columns
          .map(
            (column) =>
              `${column.name} ${column.type} ${column.args.join(' ')}`,
          )
          .join(', ') + ', PRIMARY KEY (id)';

      const SQLString = `CREATE TABLE ${this.SQL.tableName} (${sqlInBrackets})`;
      return SQLString;
    }
  }
}

export default SQLObject;
