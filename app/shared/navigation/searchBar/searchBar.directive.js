(function(){
    var app = angular.module('app.nav');
    
    app.directive("searchBar", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/shared/navigation/searchBar/searchBarView.html"
        };
    })
})();