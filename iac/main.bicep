
resource staticSite 'Microsoft.Web/staticSites@2022-09-01' = {
  name: 'my-site-stapp'
  location: 'centralus'
  properties: {} // Has to be specified for some reason but is empty in this case
  sku: {
    name: 'Free'
    size: 'Free'
  }
}
