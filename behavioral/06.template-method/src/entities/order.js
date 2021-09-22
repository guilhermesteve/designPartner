export default class Order {
  constructor({ cutomerId, amount, products }) {
    this.cutomerId = cutomerId
    this.amount = amount
    this.products = products
  }
}
