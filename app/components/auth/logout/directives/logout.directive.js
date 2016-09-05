(function(){
    var app = angular.module('app.logout');
    
    app.directive("logout", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/auth/logout/logoutView.html"
        };
    })
})();