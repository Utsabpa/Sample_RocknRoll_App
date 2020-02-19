import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['name'],
  name: '',
  didInsertElement: function() {
    var model =  this.get('model');
    this.set('artists',model);
  },
  actions:{
    getSongsByName(name){
      this.set('category',name);
      this.set('artist', this.store.query('artist',{'category':name}));
      this.set('name','');
    },
    playSong(){
      alert("Will play the song");
    },
    downloadSong(){
      alert("download will start shortly");
    },
    goToHome(){
      this.set('name','');
      this.set('artists',this.get('artists'));
      this.set('category','');
    },
    onSongs(name){
      this.set('name',name);
      this.set('song', this.store.queryRecord('song',{'name':name}));
      this.set('category','');
      
    }/*,
    toggleCheckBox: function() {
        this.set('toggleChecked', !this.get('toggleChecked'));
    }*/
  }
});
