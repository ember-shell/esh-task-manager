import Ember from 'ember';

export default Ember.Controller.extend({

  manager: Ember.inject.service('shell-manager'),

  actions: {
    startApp(appName){
      const manager = this.get('manager');

      this.get('manager').exec(appName);

      this.set('execAppName', '');

      return false;
    }
  }

});
