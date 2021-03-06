// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e1b1b954-c500-427b-8cb1-ff8d47c39c17',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '82dc2e83-ff62-4cea-bc70-15c9386f0d72',
    registeredProviders: ['website'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e1b1b954-c500-427b-8cb1-ff8d47c39c17/resourceGroups/testrg13424/providers/Microsoft.Web/sites/webappclitest3619/restart?api-version=2014-06-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2e97335f-b44f-41db-adbf-97a560e6ca26',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '03792625-ec1f-4555-adde-9982fd48c927',
  'x-ms-routing-request-id': 'WESTUS:20150620T015802Z:03792625-ec1f-4555-adde-9982fd48c927',
  date: 'Sat, 20 Jun 2015 01:58:01 GMT' });
 return result; }]];