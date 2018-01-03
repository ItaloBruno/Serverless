'use strict';

module.exports.index = (event, context, callback) => {
  let response = {
    statusCode: 200,
    body: JSON.stringify({ hello: 'abestado'})
  };

  context.succeed(response);
};
