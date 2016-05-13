import Ember from 'ember';
// const { get } = Ember;

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    return this.store.createRecord('user');
  },
  actions: {
    doRegister() {
      console.log(123);
      // let {email, password} = getProperties(this, model);
      // get(this, 'session')
        // .authenticate('authenticator:oath2', name, password)
        // .then(() => {


        // })
    }
  }
});
