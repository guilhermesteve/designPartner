const Product = require("../../src/entities/product");

class ProductDataBuilder {
  constructor() {

    this.productData = {
      id: '000001',
      name: 'computer',
      price: 1000,
      category: 'eletronic'
    }
  }

  static aProduct() {
    return new ProductDataBuilder()
  }

  withInvalidId() {
    this.productData.id = '1'

    return this
  }

  withInvalidName() {
    this.productData.name = 'leandro $oAres'

    return this
  }


  withInvalidPrice() {
    this.productData.price = 2000

    return this
  }

  withInvalidCategory() {
    this.productData.category = 'mecanic'
    return this
  }

  build() {
    const product = new Product(this.productData)
    return product
  }

}


module.exports = ProductDataBuilder
