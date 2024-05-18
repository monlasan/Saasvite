import { inject } from '@adonisjs/core'

@inject()
export class DatabaseService {
  async start() {
    console.log('🟢 MONGODB LAUNCHED SUCCESSFULLY')
    // do something
  }
  async stop() {
    console.log('🔴 MONGODB STOPPED SUCCESSFULLY')
    // do something
  }
}
