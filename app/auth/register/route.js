import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('user');
  },
  actions: {
    doRegister() {
      this.get('currentModel').save().then(() => {
        this.transitionTo('auth.login');
        this.get('flashMessages').success('Registered! Please login now');
      }).catch(response => {

        this.get('flashMessages').danger('Service Error');
        const { errors } = response;
        this.get('flashMessages').danger(errors.mapBy('detail').join(', '));

      });
    }
  }
});
