@secure()
param repositoryToken string

param location string = resourceGroup().location

resource staticSite 'Microsoft.Web/staticSites@2022-09-01' = {
  name: 'my-site-stapp'
  location: location
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
