const { v4 } = require("uuid");
const axios = require("axios");
const AWS = require("aws-sdk");

const crearRegistro = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { numero } = JSON.parse(event.body);

  const url = `https://swapi.py4e.com/api/people/${numero}/`;
  const response = await axios.get(url);
  const data = response.data;

  const id = v4();

  const mappedData = {
    id: id,
    nombre: data.name,
    altura: data.height,
    color_de_ojos: data.eye_color,
  };

  await dynamodb
    .put({
      TableName: "SwapiTable",
      Item: mappedData,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(mappedData),
  };
};

module.exports = {
  crearRegistro,
};
