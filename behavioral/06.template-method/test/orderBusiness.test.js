import { expect, describe, test, jest, beforeEach } from '@jest/globals'
import OrderBusiness from '../src/business/orderBusiness.js'
import Order from '../src/entities/order.js'



describe("Test suit for template method design pattern", () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  describe('#OrderBusiness', () => {
    test("execution Order Business without template method", () => {
      const order = new Order({
        cutomerId: 1,
        amount: 100.00,
        products: [{ description: "carro" }]
      })

      const orderBusiness = new OrderBusiness()

      const isValid = orderBusiness._validateRequiredFields(order)
      expect(isValid).toBeTruthy()

      const result = orderBusiness._create(order)
      expect(result).toBeTruthy()


    })
    test("execution Order Business with template method", () => {
      const order = new Order({
        cutomerId: 1,
        amount: 100.00,
        products: [{ description: "carro" }]
      })

      const orderBusiness = new OrderBusiness()

      const calledValidationfn = jest.spyOn(
        orderBusiness,
        orderBusiness._validateRequiredFields.name
      )

      const calledCreatefn = jest.spyOn(
        orderBusiness,
        orderBusiness.create.name
      )

      const result = orderBusiness.create(order)
      expect(result).toBeTruthy()

      expect(calledValidationfn).toHaveBeenCalled()
      expect(calledCreatefn).toHaveBeenCalled()

    })
  })


})
