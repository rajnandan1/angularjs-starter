myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    var routes = [{
        name: 'home',
        config: {
            url: '/',
            templateUrl: "app/views/ViewOne.html",
            controller: 'ViewOneCtrl',
            data: {
                level: 0
            }
        }
    }, {
        name: 'abstract',
        config: {
            url: '/abstract',
            abstract: true,
            templateUrl: "app/views/abstract.html"
        }
    }, {
        name: 'abstract.viewTwo',
        config: {
            url: '/viewTwo',
            templateUrl: "app/views/ViewTwo.html",
            controller: 'ViewTwoCtrl',
            data: {
                level: 1
            }
        }
    }]



    for (var i = 0; i < routes.length; i++) {
        $stateProvider.state(routes[i].name, routes[i].config)
    }

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
});