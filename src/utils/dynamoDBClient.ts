const AWS = require('aws-sdk');



AWS.config.update({
  region: "localhost",
  endpoint: "http://localhost:8000",
  accessKeyId: "X",
  secretAccessKey: "X"
})



export const document = new AWS.DynamoDB.DocumentClient();


