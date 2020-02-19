import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  serializeId: function(id) {
    return id.toString();
  },
  /*normalizePayload: function(payload) {
    console.log("Payload");
    console.log(payload);
    return {
      'obj': payload.obj
    };


  }*/
});
