import { getModelByTenant } from '#database/index'
import { OrganizationSchema } from '#database/schemas/organization_schema'
import type { HttpContext } from '@adonisjs/core/http'

export default class OrganizationsController {
  async index({ subdomains }: HttpContext) {
    const Organization = getModelByTenant(subdomains.tenant, 'organization', OrganizationSchema)
    const organization = await Organization.find({})
    return organization
  }
  async show({ params, subdomains }: HttpContext) {
    const Organization = getModelByTenant(subdomains.tenant, 'organization', OrganizationSchema)
    const organization = await Organization.findById(params.id)
    return { organization }
  }
}
