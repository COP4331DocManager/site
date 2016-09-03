(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
      'ngRoute',
      'mgcrea.ngStrap', //angular-strap
      
      /*custom*/
      
      'app.nav',
      'app.home',
      'app.upload'
		
      
      
    ])
    .config(configFunction);

    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
    });
  };

})();


    
