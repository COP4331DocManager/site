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
	
	
	function NavCtrl($scope, $location)
	{
		// used to change route
		$scope.go = function ( path ) {
			$location.path( path );
		}
		

		$scope.dropdown = [
			{
				"text": "<i class=\"fa fa-download\"></i>&nbsp;Groups",
				"href": "#/Groups",
				"active": true
			},
			{
				"text": "<i class=\"fa fa-globe\"></i>&nbsp;Display an alert",
				"click": "$alert(\"Holy guacamole!\")"
			},
			{
				"text": "<i class=\"fa fa-external-link\"></i>&nbsp;External link",
				"href": "/auth/facebook",
				"target": "_self"
			},
			{
				"divider": true
			},
			{
				"text": "Logout",
				"href": "#/logout"
		}];


	};
})();