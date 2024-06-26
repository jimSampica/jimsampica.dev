@secure()
param repositoryToken string

resource staticSite 'Microsoft.Web/staticSites@2022-09-01' = {
  name: 'my-site-stapp'
  location: 'centralus'
  properties: {
    branch: 'main'
    repositoryToken: repositoryToken
    repositoryUrl: 'https://github.com/jamesSampica/mySite'
    buildProperties: {
        appLocation: './src'
    }
}
  sku: {
      name: 'Free'
      size: 'Free'
  }
}
