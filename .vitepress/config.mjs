export default {
  title: 'RetailHub Pro Docs',
  description: 'User documentation for RetailHub Pro',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'RetailHub Pro Docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Onboarding', link: '/onboarding/register-business' },
      { text: 'Operations', link: '/operations/manage-stores' },
      { text: 'Troubleshooting', link: '/troubleshooting/common-setup-issues' }
    ],
    sidebar: [
      {
        text: 'Start Here',
        items: [
          { text: 'Getting Started', link: '/getting-started' }
        ]
      },
      {
        text: 'Onboarding',
        items: [
          { text: 'Register Your Business', link: '/onboarding/register-business' },
          { text: 'Add Your First Store', link: '/onboarding/add-first-store' },
          { text: 'Add Users and Roles', link: '/onboarding/add-users-and-roles' },
          { text: 'Add Products and Stock', link: '/onboarding/add-products-and-stock' },
          { text: 'Make Your First Sale', link: '/onboarding/make-first-sale' }
        ]
      },
      {
        text: 'Operations',
        items: [
          { text: 'Manage Stores', link: '/operations/manage-stores' },
          { text: 'Manage Users', link: '/operations/manage-users' },
          { text: 'Inventory Basics', link: '/operations/inventory-basics' },
          { text: 'Reports and Subscription', link: '/operations/reports-and-subscription' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Roles and Permissions', link: '/reference/roles-and-permissions' }
        ]
      },
      {
        text: 'Troubleshooting',
        items: [
          { text: 'Common Setup Issues', link: '/troubleshooting/common-setup-issues' }
        ]
      },
      {
        text: 'Technical Guides',
        items: [
          { text: 'Paystack Web Subscription Test', link: '/guides/paystack-web-test' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'RetailHub Pro documentation',
      copyright: `Copyright ${new Date().getFullYear()} RetailHub Pro`
    }
  }
}
