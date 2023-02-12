import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_NAME || 'maxMilhas',
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3002,
  dialect: 'mysql',
};

export = config;
