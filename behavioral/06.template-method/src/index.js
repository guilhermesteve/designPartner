import OrderBusiness from "./business/orderBusiness.js";
import Order from "./entities/order.js";


const order = new Order({
  cutomerId: 1,
  amount: 10,
  products: [{ description: "shampoo" }]
})

const orderbusiness = new  OrderBusiness()

console.info("ordercreate", orderbusiness.create(order))
