const { v4 } = require("uuid");
const axios = require("axios");
const AWS = require("aws-sdk");

const registrarPlanets = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { numero } = JSON.parse(event.body);

  const url = `https://swapi.py4e.com/api/planets/${numero}/`;
  const response = await axios.get(url);
  const data = response.data;

  const id = v4();

  const mappedData = {
    id: id,
    nombre: data.name,
    clima: data.climate,
    gravedad: data.gravity,
  };

  await dynamodb
    .put({
      TableName: "PlanetsTable",
      Item: mappedData,
    })
    .promise();

  return {
    status: 200,
    body: JSON.stringify(mappedData),
  };
};

module.exports = {
  registrarPlanets,
};
