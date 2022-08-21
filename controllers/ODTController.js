const { default: axios } = require("axios");
const actions = require("../Constants/ODTActions");
const { createODTTextResponse } = require("../utils/responseCreater");
const { format } = require("date-fns");

async function getShipmentDate(params) {
  const { order_id } = params;
  const {
    data: { shipmentDate },
  } = await axios.post(
    `https://orderstatusapi-dot-organization-project-311520.uc.r.appspot.com/api/getOrderStatus`,
    { orderId: order_id }
  );
  const formattedDate = format(Date.parse(shipmentDate), "EEEE, dd MMM yyyy");
  const resMsg = `Your Order ${order_id} will be shipped on ${formattedDate}`;
  return createODTTextResponse(resMsg);
}

const actionsMapping = async (req, res) => {
  const { action, parameters } = req.body.queryResult;
  switch (action) {
    case actions.ODT_ORDER_INFO_ORDER_STATUS:
      const response = await getShipmentDate(parameters);
      res.send(response);
  }
};

module.exports = {
  actionsMapping,
};
