import { getModelByTenant } from '#database/index'
import { OrganizationSchema } from '#database/schemas/organization_schema'
import { UserSchema } from '#database/schemas/user_schema'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index({ subdomains }: HttpContext) {
    const User = getModelByTenant(subdomains.tenant, 'user', UserSchema)
    const user = await User.find({})
    return user
  }
  async show({ params, subdomains }: HttpContext) {
    const User = getModelByTenant(subdomains.tenant, 'user', UserSchema)
    const user = await User.findById(params.id)
    return { user }
  }
  async store({ request, subdomains }: HttpContext) {
    const { organizationId, member } = request.body()
    const Organization = getModelByTenant(subdomains.tenant, 'organization', OrganizationSchema)
    const organization = await Organization.findById(organizationId)
    if (!organization) {
      throw new Error('Organization not found')
    }
    const User = getModelByTenant(subdomains.tenant, 'user', UserSchema)
    const user = await User.create({ ...member })
    organization.members.push(user._id)
    await organization.save()

    return user
  }
}
