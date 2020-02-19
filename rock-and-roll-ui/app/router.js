import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  /*this.route('artists', { resetNamespace: true }, function () {
	  
  })*/
  this.route('artists');
  this.route('artist', { path: '/artist/:name' });
  //this.route('artist', { path: '/artist/:name' });
});

export default Router;
