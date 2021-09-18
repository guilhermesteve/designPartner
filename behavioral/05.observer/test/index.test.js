import { expect, describe, test, jest, beforeAll } from '@jest/globals'
import Payment from '../src/events/payment'
import Marketing from '../src/observers/marketing'
import Shipment from '../src/observers/shipment'
import PaymentSubject from '../src/subjects/paymentSubjects'

describe('Test Suit for Observer Pattern', () => {
  beforeAll(() => {
    jest.spyOn(console, console.log.name).mockImplementation(() => { })
  })
  test('#PaymentSubject notify observers', () => {
    const subject = new PaymentSubject()
    const observer = {
      update: jest.fn()
    }

    const data = 'hello word'
    const expected = data

    subject.subscribe(observer)
    subject.notify(data)
    expect(observer.update).toBeCalledWith(expected)
  })
  test('#PaymentSubject should not notify unsubscribed observers', () => {
    const subject = new PaymentSubject()
    const observer = {
      update: jest.fn()
    }

    const data = 'hello word'

    subject.subscribe(observer)
    subject.unsubscribe(observer)
    subject.notify(data)
    expect(observer.update).not.toHaveBeenCalled()
  })
  test('#Payment should notify subject after a creditcard transaction', () => {
    const subject = new PaymentSubject()
    const payment = new Payment(subject)

    const paymentSubjectNotifySpy = jest.spyOn(
      payment.paymentSubject,
      payment.paymentSubject.notify.name,
    )

    const data = { name: 'guilherme soares', id: Date.now() }

    payment.creditCard(data)

    expect(paymentSubjectNotifySpy).toBeCalledWith(data)

  })
  test('#ALL should notify subscribers after a creditcard payment', () =>{
    const subject = new PaymentSubject()
    const payment = new Payment(subject)

    const marketing = new Marketing()
    const shipment = new Shipment()

    const shipmentSpy = jest.spyOn(shipment, shipment.update.name)
    const marketingSpy = jest.spyOn(marketing, marketing.update.name)

    subject.subscribe(shipment)
    subject.subscribe(marketing)


    const data = { name: 'guilherme soares', id: Date.now() }

    payment.creditCard(data)

    expect(shipmentSpy).toBeCalledWith(data)
    expect(marketingSpy).toBeCalledWith(data)
  })
})
