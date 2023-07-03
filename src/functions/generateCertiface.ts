import { APIGatewayProxyHandler } from "aws-lambda"
import {document} from '../utils/dynamoDBClient'

interface ICreateCertiface {
    id:string;
    name:string;
    grade:string;
}

export const handler:APIGatewayProxyHandler = async (event) =>{
    const {id,name,grade} = JSON.parse(event.body) as ICreateCertiface;
    
    await document.put({
        TableName: "users_certifacate",
        Item: {
            id,
            name,
            grade,
            create_at: new Date().getTime()
        },
        
    }).promise()
 

    const response = await document.query({
        TableName: "users_certifacate",
        KeyConditionExpression: "id = :id",
        ExpressionAttributeValues: {
            ":id": id
        }
    }).promise();

    return {
        statusCode: 201,
        body: JSON.stringify(
            response.Items[0]
        )
    }

}