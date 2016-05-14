import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: config.DS.namespace,
  host: config.DS.host,

  //Simple auth
  authorizer: 'authorizer:application',

  urlForCreateRecord(modelName/*, snapshot*/) {
    switch(modelName) {
      case 'user':
      case 'users':
        return this._super(...arguments).replace('users', 'register');
      default:
        return this._super(...arguments);
    }
  }
});
