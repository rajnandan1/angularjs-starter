myApp.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/ViewOne');
	$stateProvider.state('app', {
		url: '/ViewOne',
		templateUrl: "views/ViewOne.html",
		controller: 'ViewOneCtrl'
	});
	$stateProvider.state('abstract', {
		url: '/abstract',
		abstract: true,
		templateUrl: "views/abstract.html"
	});
	$stateProvider.state('abstract.viewTwo', {
		url: '/viewTwo',
		templateUrl: "views/ViewTwo.html",
		controller: 'ViewTwoCtrl'
	});
	
 
});
 