module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hola mundo",
        input: event,
      },
      null,
      2
    ),
  };
};