import Ember from 'ember';
const {inject} = Ember;

export default Ember.Route.extend({
  session: inject.service(),
  flashMessages: inject.service(),

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
        this.get('flashMessages').success('Logged In');
      }).catch(response => {
        let {errors} = response;
        if (errors.mapBy('code').indexOf(401) >= 0) {
          this.get('flashMessages')
            .danger('There was a problem with your username or password, please try again');
        } else {
          this.get('flashMessages').danger('Service Error');
        }

      });
    }
  }
});
