
const OrderList = require('../models').Order_list;

module.exports = () => {
  let conditions = getInventoryStatus();
  OrderList.update(
    {status:2},
    {where:conditions}
  )
  .then(rowsUpdated => {
    console.log(rowsUpdated);
  })
  .catch(error => {
    console.log(error);
  })
}

function getInventoryStatus() {
  /*Business logic for inventory status goes here*/
    return { status : 1 };
}
