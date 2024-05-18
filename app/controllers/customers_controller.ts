import { getModelByTenant } from '#database/index'
import { CustomerSchema } from '#database/schemas/customer_schema'
import type { HttpContext } from '@adonisjs/core/http'

export default class CustomersController {
  async index({ subdomains }: HttpContext) {
    const Customer = getModelByTenant(subdomains.tenant, 'customer', CustomerSchema)
    const customers = await Customer.find({})
    return { customers, customerName: subdomains.tenant }
  }
  async show({ params, subdomains }: HttpContext) {
    const Customer = getModelByTenant(subdomains.tenant, 'customer', CustomerSchema)
    const customer = await Customer.findById(params.id)
    return { customer }
  }
  async store({ request }: HttpContext) {
    const { name } = request.body()
    const Customer = getModelByTenant('landlord', 'customer', CustomerSchema)
    const customer = await Customer.create({ name })
    return customer
  }
  async bulk({ request }: HttpContext) {
    const { name } = request.body()
    const Customer = getModelByTenant('landlord', 'customer', CustomerSchema)
    const customer = await Customer.create({ name })
    return customer
  }
}
