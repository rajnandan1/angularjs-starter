myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    const makeDeps = function(componentPath) {
        return [
            componentPath + ".ctrl.js",
            componentPath + ".service.js",
            componentPath + ".spec.js",
            componentPath + ".css",
        ]
    }
    $stateProvider.state('home', {
        url: "/",
        templateUrl: "app/home/home.tpl.html",
        controller: "homeCtrl",
        level: 0,
        resolve: {
            componentDeps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(makeDeps("app/home/home"));
            }],
            otherDeps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(["CustomFilter", "CustomDirective", "Tooltip"]);
            }]
        }
    });

    $stateProvider.state('abstract', {
        url: "/abstract",
        templateUrl: "app/abstract/abstract.tpl.html",
        controller: "abstractCtrl",
        abstract: true,
        resolve: {
            componentDeps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(makeDeps("app/abstract/abstract"));
            }]
        }
    })

    $stateProvider.state('abstract.first', {
        url: "/first",
        templateUrl: "app/abstract.first/abstract.first.tpl.html",
        controller: "abstract.firstCtrl",
        level: 1,
        resolve: {
            componentDeps: ['$ocLazyLoad', function($ocLazyLoad) {

                return $ocLazyLoad.load(makeDeps("app/abstract.first/abstract.first"));
            }]
        }
    })

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
})