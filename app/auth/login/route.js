import Ember from 'ember';
const {inject} = Ember;

export default Ember.Route.extend({
  session: inject.service(),
  model() {
    return this.store.createRecord('user');
  },
  actions: {
    doLogin() {
      let user = this.get('currentModel');
      this.get('session').authenticate(
        'authenticator:oauth2',
        user.get('email'),
        user.get('password')
      ).then(() => {
      }, err => {
        console.log(err);
      });
    }
  }
});
