(function(){
    var app = angular.module('app.home');
    
 	app.directive('homeGroups', function(){
		return{
			restrict: 'E',
			templateUrl: "/app/components/home/directives/groups/groupsView.html",
			controller: GroupList,
			controllerAs: 'groupList'
		};
	});
	
	function GroupList($scope)
	{
		
		//use some data service to do a rest call to a database
		$scope.roles = [
			{id: 1, text: 'guest'},
			{id: 2, text: 'user'},
			{id: 3, text: 'customer'},
			{id: 4, text: 'admin'}
		  ];
		  $scope.user = {
			roles: [2, 4]
		  };
		 
};
	
})();