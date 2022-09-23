exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // We map everything in the pages/app/ directory to its own route
  // pages/app/account.tsx -> /account
  // This means creating pages/account.tsx would conflict
  if (page.path.match(/^\/app/)) {
    const pageInAppDir = page
    pageInAppDir.matchPath = `/*`

    // Update the page.
    createPage(pageInAppDir)
  }
}
