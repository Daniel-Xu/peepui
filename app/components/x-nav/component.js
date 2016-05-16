import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['navbar-fixed', 'x-nav'],

  _setupChildComponent(child) {
    child.get('elementId');
    if (child.classNames.indexOf('side-nav') >= 0) {
      this.set('_sideNavId', child.elementId);
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this.$('a.button-collapse')
      .attr('data-activates', this.get('_sideNavId'));

    this.$(".button-collapse").sideNav({
      closeOnClick: true
    });
    this.$(".dropdown-button").dropdown();
  }
});
