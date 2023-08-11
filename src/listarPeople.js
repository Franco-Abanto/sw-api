const AWS = require("aws-sdk");

const listarPeople = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const resultado = await dynamodb
      .scan({
        TableName: "SwapiTable",
      })
      .promise();

    const registros = resultado.Items;

    return {
      status: 200,
      body: { registros },
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listarPeople,
};
