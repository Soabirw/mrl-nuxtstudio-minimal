export default defineAppConfig({
  theme: {
    primaryColor: 'di-serria-100',
    fontSize: {
      'h1': '2.5rem', // Example: Set h1 to 40px
      'h2': '2rem',   // Example: Set h2 to 32px
      'h3': '1.75rem', // Example: Set h3 to 28px
    }
  },
  ui: {
    fontSize: {
      'h1': '2.5rem', // Example: Set h1 to 40px
      'h2': '2rem',   // Example: Set h2 to 32px
      'h3': '1.75rem', // Example: Set h3 to 28px
    },
    strategy: 'override',
    primary: 'di-serria',
    gray: 'di-serria',

    horizontalNavigation: {
      active: 'text-gray-900 dark:text-white after:bg-yellow-500 dark:after:bg-yellow-400 after:rounded-full'
    }
  }
})