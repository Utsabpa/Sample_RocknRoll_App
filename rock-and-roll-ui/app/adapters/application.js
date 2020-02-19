import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  /*headers: {
    "Content-Type" : "application/json"
  },*/
  namespace: 'api',
  host: 'http://localhost:3000'
});
