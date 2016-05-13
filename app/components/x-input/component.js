import Ember from 'ember';

const {get, computed} = Ember;

export default Ember.Component.extend({
  classNames: ['input-field'],
  type: 'text',

  _errorMessages: computed('errors.[]', function() {
    return (get(this, 'errors') || []).join(', ');
  })

});
