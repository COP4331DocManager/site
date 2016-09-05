(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
		'ngRoute',
		'mgcrea.ngStrap', //angular-strap
		'ngAnimate',
		'ngSanitize',
	  	"checklist-model",
	  
      
      	/*custom*/
		'app.nav',
		'app.home',
		'app.upload',
		'app.account',
	  	'app.login',
	  	'app.logout'
		
      
    ])
    .config(configFunction);

    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
    });
  };

})();


    
