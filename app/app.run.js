myApp.run(function(globalsetting, $rootScope, $timeout) {


    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, error) {
        var toLevel = toState.level || 0;

        if (fromState.level !== undefined) {

            var fromLevel = fromState.level;

            if (fromLevel < toLevel) {
                $rootScope.direction = "f";

            } else {
                $rootScope.direction = "b";
            }
        }

        H5_loading.show();

    });

    $rootScope.$on('$viewContentLoaded', function(event) {
        H5_loading.hide();
    });

}).controller("AppController", function($scope) {
    //alert("Main Controller")
});