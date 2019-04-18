angular.module('app.factories').factory('CustomFactory',function(){
	var text = "This is a custom factory"; 
    return {
         text:function(){
             return text;
         }
     }
})