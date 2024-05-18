import CustomersController from '#controllers/customers_controller'
import OrganizationsController from '#controllers/organizations_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import TenantsController from '#controllers/tenant_controller'

router
  .group(() => {
    router.group(() => {
      router.get('/', async () => {
        return '🟢 Everything ok!'
      })
      // [ANON] Tenants
      router.get('tenants', [TenantsController, 'index'])
      router.post('tenants', [TenantsController, 'store']) // AUTH FOR TENANTS
      // [ANON] Customers
      router.post('customers', [CustomersController, 'store'])
      router.post('customers/bulk', [CustomersController, 'bulk'])
    })

    router
      .group(() => {
        // Organizations (tenants)
        router.get('organizations', [OrganizationsController, 'index'])
        router.get('organizations/:id', [OrganizationsController, 'show'])
        // Users (Members)
        router.get('members', [UsersController, 'index'])
        router.post('members', [UsersController, 'store'])
        router.get('members/:id', [UsersController, 'show'])
        // Users (Customers)
        router.get('customers', [CustomersController, 'index'])
        router.get('customers/:id', [CustomersController, 'show'])
      })
      .domain(':tenant.example.com')
      .use(middleware.tenanted())
  })
  .prefix('api/v1')
