angular.module('app.filters').filter('customFilter',function(){
	 return function(x) {
        return String(x)+".00";
    };
})