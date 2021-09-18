import Payment from "./events/payment.js";
import Marketing from "./observers/marketing.js";
import Shipment from "./observers/shipment.js";
import PaymentSubject from "./subjects/paymentSubjects.js";


const subject = new PaymentSubject()
const marketing = new Marketing()
subject.subscribe(marketing)

const shipment = new Shipment()
subject.subscribe(shipment)

const payment = new Payment(subject)

const data = { userName: 'guilherme', id: Date.now() }

payment.creditCard(data)

subject.unsubscribe(marketing)

const pg = { userName: 'joanzinho', id: Date.now() }

payment.creditCard(pg)
