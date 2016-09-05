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

	
	var GroupList = function ($scope, ModalService)
	{
		
		//use some data service to do a rest call to a database
		$scope.groups = [
			{id: 1, text: 'guest'},
			{id: 2, text: 'user'},
			{id: 3, text: 'customer'},
			{id: 4, text: 'admin'}
		  ];
		  $scope.user = {
			groups: [2, 4]
		  };
		
		$scope.yesNoResult = null;
  		$scope.complexResult = null;
  		$scope.customResult = null;
	
		$scope.showYesNo = function() {

    	ModalService.showModal({
      		templateUrl: "/app/components/home/directives/groups/settings/modalView.html",
      		controller: "GroupSettings"
		})
		.then(function(modal) {
      		modal.element.modal();
      		modal.close
			.then(function(result) {
				$scope.yesNoResult = result ? "You said Yes" : "You said No";
			});
    	});
	};
	GroupList.$inject = ['$scope', 'ModalService']

		 
};
	
app.controller("GroupSettings", ['$scope', 'close', function($scope, close){
	
	$scope.close = function(result) {
 	  close(result, 500); // close, but give 500ms for bootstrap to animate

	}
}]);

	
})();