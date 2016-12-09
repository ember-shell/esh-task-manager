import Ember from 'ember';

export default Ember.Route.extend({

  //manager: Ember.inject('shell-manager'),

  actions: {
    startApp(appName){
      this.get('manager').exec(appName, {
        title: appName,
        icon: '/theme/app-icons/test-icon.svg',
        hasStatusBar: false
      });
      this.set('execAppName', '');
      return false;
    }
  },

  renderTemplate() {
    this._super(...arguments);
    this.render({ outlet: 'esh-task-manager' });
  }

});
