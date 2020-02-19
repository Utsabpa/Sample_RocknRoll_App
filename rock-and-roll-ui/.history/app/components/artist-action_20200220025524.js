import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onSongs(name){
      var buttonAction = Ember.$("[id*='sliderLabel']");
      var i = 1;
      while (i <= buttonAction.length) {
        $(buttonAction[i - 1]).unbind('click');
        $(buttonAction[i - 1]).addClass('disabled');
        $(buttonAction[i - 1]).find('input').prop('disabled', true);
        $(buttonAction[i - 1]).find('span').unbind('click');
        i++;
      }
      var self = this;
      Ember.run.later((function () {
        self.get('onSongs')(name);
    }), 500);

    }
  }
});
