import Ember from 'ember';
const {inject, computed} = Ember;

export default Ember.Component.extend({
  flashMessages: inject.service(),

  reversedFlashQueue: computed('flashMessages.arrangedQueue.[]', function() {
    return this.get('flashMessages.arrangedQueue').reverse();
  })
});
