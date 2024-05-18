import mongoose from 'mongoose'

type Models = 'tenant' | 'user' | 'organization' | 'customer'
export let mongodb: mongoose.Connection | undefined = undefined

/**
 * Creating New MongoDb Connection obect by Switching DB
 */
const getTenantDB = (tenantId: string, modelName: Models, schema: mongoose.Schema) => {
  const dbName = tenantId === 'landlord' ? 'landlord' : `tenant_${tenantId}`
  if (mongodb) {
    // useDb will return new connection
    const db = mongodb.useDb(dbName, { useCache: true })
    // console.log(`⚙ Database switched to ${dbName}`)
    db.model(modelName, schema)
    return db
  }
  // return throwError(500, codes.CODE_8004);
  throw new Error(
    '\n[ 🔴 Mongoose connection error ] : ${err} with connection info {JSON.stringify(process.env.MONGODB_URL)}\n'
  )
}

/**
 * Return Model as per tenant
 */
export const getModelByTenant = (tenantId: string, modelName: Models, schema: mongoose.Schema) => {
  // console.log(`getModelByTenant tenantId : ${tenantId}.`);
  const tenantDb = getTenantDB(tenantId, modelName, schema)
  return tenantDb.model(modelName.toLocaleLowerCase())
}

const connect = () => mongoose.createConnection('mongodb://localhost:27017')
const connectToMongoDB = () => {
  const db = connect()
  db.on('open', () => {
    console.log(
      `\n[ 🟢 MongoDB Connected ] Mongoose connection open to ${JSON.stringify(db.host)}\n`
    )
  })
  db.on('error', (err) => {
    console.log(
      `\n[ 🔴 Mongoose connection error ] : ${err} with connection info {JSON.stringify(process.env.MONGODB_URL)}\n`
    )
    process.exit(0)
  })
  mongodb = db
}

export default connectToMongoDB
