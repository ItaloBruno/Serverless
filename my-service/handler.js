'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Deu certo, abestado',
      // input: event,
    }),        
  };

  callback(null, response);
};

module.exports.push = (event, context, callback) => {
  let title = event.pathParameters.title;
  const response = {
    statusCode: 300,
    body: JSON.stringify({
      message: `o título é ${title}`,
    }),
  };

  callback(null, response);
};

module.exports.ramza = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Meu nome é Ramza',
      // input: event,
    }),        
  };

  callback(null, response);
};