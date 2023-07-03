const AWS = require('aws-sdk');


// const options = {
//     region: "localhost",
//     endpoint: "http://localhost:8000",
//     apiVersion: '2012-08-10',
//     credentials: {
//       accessKeyId: "AKIA4FWNQSUHDTH5FM2O",
//       secretAccessKey: "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"
//     },
// };

AWS.config.update({
  region: "localhost",
  endpoint: "http://localhost:8000",
  accessKeyId: "X",
  secretAccessKey: "X"
})



export const document = new AWS.DynamoDB.DocumentClient();


