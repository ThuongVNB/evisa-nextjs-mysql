// export default connect;
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.MYSQL_INITDB_DATABASE, process.env.MYSQL_INITDB_ROOT_USERNAME, process.env.MYSQL_INITDB_ROOT_PASSWORD, {
  host: process.env.MYSQL_INITDB_HOST,
  port: process.env.HOST_MACHINE_MYSQL_PORT,
  dialect: 'mariadb',
  dialectModule: require('mariadb'),
});

export default sequelize;