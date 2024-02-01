const logToConsole = () => {
  return (request, response, next) => {
    response.status(400).send('Todo mal, no pasó el middleware')
  }
};

module.exports = { logToConsole };