require("dotenv").config();

module.exports.Config = {
  port: process.env.PORT,
  hostname: process.env.RDS_HOSTNAME,
  rdsport: process.env.RDS_PORT,
  dbName: process.env.RDS_DB_NAME,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
};
