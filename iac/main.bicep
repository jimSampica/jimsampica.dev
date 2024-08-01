
resource staticSite 'Microsoft.Web/staticSites@2022-09-01' = {
  name: 'my-site-stapp'
  location: 'centralus'
  properties: {
    buildProperties:{
      skipGithubActionWorkflowGeneration: true
    }
  }
  sku: {
    name: 'Free'
    size: 'Free'
  }
}
