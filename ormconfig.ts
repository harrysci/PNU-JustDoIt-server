module.exports = {
  type: 'mysql',
  host: process.env.AWS_DB_HOST,
  port: process.env.AWS_DB_PORT,
  username: process.env.AWS_DB_USERNAME,
  password: process.env.AWS_DB_PASSWORD,
  database: process.env.AWS_DB_DATABASE,
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
};
