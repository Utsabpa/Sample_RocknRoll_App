import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, models) {
    this._super(controller, models);
    this.set('name', null);
    this.set('model', null);
    controller.set('artists', models.artists);
    controller.set('categories', models.categories);
    /*this.store.findAll('category').then(function(category) {
        controller.set('categories', category);
    });*/
  },
  model: function() {
  return Ember.RSVP.hash({
      artists: this.store.findAll('artist'),
      categories: this.store.findAll('category')
    });
    //return this.store.findAll('artist');
  },
  actions: {

  }
});
