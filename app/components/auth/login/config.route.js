(function() {
  'use strict';

  angular
    .module('app.login')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'app/components/auth/login/loginView.html'
    });
  }

})();