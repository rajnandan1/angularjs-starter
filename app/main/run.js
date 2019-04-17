myApp.run(function($localStorage, globalsetting, $rootScope, $timeout) {
    console.log("app run");
    $localStorage.appname = globalsetting.appName;

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, error) {
        var toLevel = toState.data.level;

        if (fromState.data) {
            var fromLevel = fromState.data.level;

            if (fromLevel < toLevel) {
                console.log("Going forward");
                $rootScope.direction = "f";

            } else {
                console.log("going backward");
                $rootScope.direction = "b";
            }
        }

    });
});