import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';
import '../imports/startup/accounts-config.js';

angular.module('todo_list', [
  angularMeteor,
  todosList.name,
  'accounts.ui'
]);

function onReady() {
  angular.bootstrap(document, ['todo_list']);
}

if (Meteor.isCordova) {
  angular.element(document). on('deviceready', onReady);
}else {
  angular.element(document).ready(onReady);
}
