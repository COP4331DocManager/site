(function(){
    var app = angular.module('app.nav', []);
    
    app.directive('navigation', function(){
        return{
            restrict: 'E',
            templateUrl: "/app/shared/navigation/navView.html",
            controller: NavCtrl,
            controllerAs: "navCtrl"
        };
    });
    
    function NavCtrl()
    {
        //starts off at the homepage
        this.tab = 1;

        this.isSet = function(checkTab) {
            return this.tab === checkTab;    
        };

        this.setTab = function(activeTab) {
            this.tab = activeTab;
        };
    };
    
})();