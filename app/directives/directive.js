angular.module('app.directives').directive('customDirective',function(){
	 return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'app/partials/custom-directive.html',
        controller: ['$scope', '$attrs', '$element', function($scope, $attrs) {

        }],
        link: function(scope, element, attrs) {

        }
    }
}).directive('customDirective2',function(){
	 return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'app/partials/custom-directive2.html',
        controller: ['$scope', '$attrs', '$element', function($scope, $attrs) {

        }],
        link: function(scope, element, attrs) {

        }
    }
})