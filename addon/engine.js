import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { modulePrefix } = config;

const Eng = Engine.extend({
  modulePrefix,
  Resolver,

  title: "Task Manager",
  icon: 'engines-dist/esh-task-manager/icon.svg',
  multipleInstances: false,

  dependencies: {
    services: [
      'shell-manager',
    ]
  }
});

loadInitializers(Eng, modulePrefix);

export default Eng;