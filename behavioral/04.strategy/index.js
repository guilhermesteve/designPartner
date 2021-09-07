import ContextStrategy from "./src/base/contextStrategy.js"
import MongoDBStrategy from "./src/strategies/mongoDBStrategy.js"
import PostegresStrategy from "./src/strategies/postegresStrategy.js"

const postgresConnectionString = "postgres://guilherme:senha0001@localhost:5432/heroes"

const postegresContext = new ContextStrategy(new PostegresStrategy(postgresConnectionString))
await postegresContext.connect()

const mongoDBConnectionString = "mongodb://guilherme:senha0001@localhost:27017/heroes"
const mongoDBContext = new ContextStrategy(new MongoDBStrategy(mongoDBConnectionString))

await mongoDBContext.connect()

const data = [
  {
    name: 'guilherme',
    type: 'transaction'
  },
  {
    name: 'mongodb',
    type: 'activityLog'
  }
]

const contextTypes = {
  transaction: postegresContext,
  activityLog: mongoDBContext
}

for (const { type, name } of data) {
  const context = contextTypes[type]

  await context.create({ name: name + Date.now() })
  console.log(type, context.dbStrategy.constructor.name)
  console.log(await context.read())
}
//await postegresContext.create({ name: data[0].name })
//console.log(await postegresContext.read())

//await mongoDBContext.create({ name: data[1].name })
//console.log(await mongoDBContext.read())
