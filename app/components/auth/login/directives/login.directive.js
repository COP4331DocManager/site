(function(){
    var app = angular.module('app.login');
    
    app.directive("login", function(){
        return{
            restrict: 'E',
            templateUrl: "/app/components/auth/login/loginView.html"
        };
    })
})();