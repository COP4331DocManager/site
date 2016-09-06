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
	  	"angularModalService",
	  
      
      	/*custom*/
		'app.nav',
		'app.home', /*'app.home.groups', 'app.home.settings',*/
		'app.upload',
		'app.account',
	  	'app.login',
	  	'app.logout',
	  	'app.group.create'
		
      
    ])
    .config(configFunction);

    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
    });
  };

})();


    
