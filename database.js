import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('CadastroUsuario.db');

const setupDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, cep TEXT, cidade TEXT);',
      [],
      (_, result) => {
        console.log('Tabela de usuários criada com sucesso.');
      },
      (_, error) => {
        console.error('Erro ao criar a tabela de usuários:', error);
      }
    );
  });
};

export { db, setupDatabase };
