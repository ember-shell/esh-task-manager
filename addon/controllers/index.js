import Ember from 'ember';

export default Ember.Controller.extend({

  manager: Ember.inject.service('shell-manager'),

  actions: {

    terminate(app){
      const manager = this.get('manager');
      manager.terminate(app.name);
      return false;
    }

  }

});
