function createODTTextResponse(message) {
  let response = {
    fulfillmentText: message,
    fulfillmentMessages: [
      {
        text: {
          text: [message],
        },
      },
    ],
  };
  return JSON.stringify(response);
}

module.exports = {
  createODTTextResponse,
};
