
param location string = resourceGroup().location

resource staticSite 'Microsoft.Web/staticSites@2022-09-01' = {
  name: 'my-site-stapp'
  location: location
  sku: {
    name: 'Free'
    size: 'Free'
  }
}
