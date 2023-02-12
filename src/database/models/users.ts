import { DataTypes, Model } from 'sequelize';
import connection from './index'


export default class Users extends Model {
  declare id: number;
  declare cpf: string;
  declare createdAt: Date;
}


Users.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    cpf: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { sequelize: connection, tableName: 'users' }
);
