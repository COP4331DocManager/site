(function(){
   angular.module('app.nav', [])
 
	.directive('navigation', function(){
        return{
            restrict: 'E',
            templateUrl: "/app/shared/navigation/navView.html",
            controller: NavCtrl,
            controllerAs: "navCtrl"
        };
    })
	.config(function($dropdownProvider) {
	   angular.extend($dropdownProvider.defaults, {
		   html: true
	   });
   	})
	
	//root scope will be used to store checks to see if an account is logged in or not
	function NavCtrl($rootScope, $scope, $location)
	{
		// used to change route
		$scope.go = function ( path ) {
			$location.path( path );
		}
		
		//This to see see conditionally show buttons...temp
        $rootScope.loggedIn = $rootScope.globals.currentUser;
		if ($rootScope.loggedin){ 
			$rootScope.loggedIn = true; // globals.currentUser could be undefined
		}else{
			$rootScope.loggedIn = false;
		}
		
		/*TODO Fix conditional buttons (login/out) based on root scope */
		$scope.dropdown = [
			{
				"text": "<i class=\"fa fa-download\"></i>&nbsp;Groups",
				"href": "#/Groups",
				"active": true
			},
			{
				"divider": true
			},
			{
				"text": "<i class=\"fa fa-sign-out\" aria-hidden=\"true\" ng-show=\"loggedIn\"> Logout </i>",
				"href": "#/logout"
			},
			{
				"text": "<i class=\"fa fa-sign-in\" aria-hidden=\"true\"  ng-hide=\"loggedIn\"> Login<\i>",
				"href": "#/login"
			}
			
		];

	};
})();