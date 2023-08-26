import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';
import { readFileSync } from 'fs';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,
  'dialectOptions': {
    'ssl': {
      'require': true,
      ca: readFileSync(`${__dirname}/rds-ca-2019-root.pem`)
    }
  },
  'dialect': config.dialect,
  'storage': ':memory:',
});
