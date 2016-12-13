import Ember from 'ember';

export default Ember.Controller.extend({

  manager: Ember.inject.service('shell-manager'),

  actions: {
    startApp(appName){
      const manager = this.get('manager');

      this.get('manager').exec(appName, {
        title: appName,
        icon: '/theme/app-icons/default.svg',
        hasStatusBar: false
      });

      this.set('execAppName', '');

      return false;
    }
  }

});
