// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '12f44720-8952-422c-bb7d-28831c2de639',
    name: 'BDHadoopHumboltCRUDReliability',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight//clusters/xplatTestHDInsightClusterCreate2050/scriptExecutionHistory/1/promote?api-version=2015-03-01-preview')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"Script with execution id '1' not found for cluster with id 'xplatTestHDInsightClusterCreate2050'\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '128',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bf526496-6771-41d5-89ce-4f790fca685c',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a37615d9-e63e-4411-9e48-3fde7824de0e',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T203433Z:a37615d9-e63e-4411-9e48-3fde7824de0e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:34:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/12f44720-8952-422c-bb7d-28831c2de639/resourceGroups/xplatTestRgHDInsightClusterCreate1069/providers/Microsoft.HDInsight//clusters/xplatTestHDInsightClusterCreate2050/scriptExecutionHistory/1/promote?api-version=2015-03-01-preview')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"Script with execution id '1' not found for cluster with id 'xplatTestHDInsightClusterCreate2050'\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '128',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bf526496-6771-41d5-89ce-4f790fca685c',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a37615d9-e63e-4411-9e48-3fde7824de0e',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T203433Z:a37615d9-e63e-4411-9e48-3fde7824de0e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 13 Apr 2016 20:34:32 GMT',
  connection: 'close' });
 return result; }]];