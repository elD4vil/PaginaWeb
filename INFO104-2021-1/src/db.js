const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: 'tu_host',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos',
  connectionLimit: 5,
});

module.exports = {
  pool,
};
