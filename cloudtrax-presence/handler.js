'use strict';

module.exports.presence = (event, context, callback) => {
  const timestamp = new Date().toISOString();
  const data = JSON.parse(event.body);

  console.log(timestamp + ": " + JSON.stringify(data));
  const response = {
        statusCode: 200,
        body: JSON.stringify({status: 'OK'}),
      };
  callback(null, response);
};
