import Ember from 'ember';

export default Ember.Component.extend({
  category: null,
  didInsertElement: function() {
    var model =  this.get('data');
    this.set('categoryData',model);
  },
  actions: {
    getSongsByName(name){
      this.set('category', name);
      this.get('getSongsByName')(name);
    },
    goToHome(){
      this.set('categoryData', []);
      this.set('categoryData', this.get('data'));
      $("#tag-type-select").val('All');
      this.get('goToHome')();
    }

  }
});
