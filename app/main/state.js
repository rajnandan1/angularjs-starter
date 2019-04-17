myApp.config(function($stateProvider,$urlRouterProvider) {
	
	$stateProvider.state('app', {
		url: '/ViewOne',
		templateUrl: "app/views/ViewOne.html",
		controller: 'ViewOneCtrl'
	});
	$stateProvider.state('abstract', {
		url: '/abstract',
		abstract: true,
		templateUrl: "app/views/abstract.html"
	});
	$stateProvider.state('abstract.viewTwo', {
		url: '/viewTwo',
		templateUrl: "app/views/ViewTwo.html",
		controller: 'ViewTwoCtrl'
	});
	
 
    $urlRouterProvider.otherwise('/ViewOne');
});
 