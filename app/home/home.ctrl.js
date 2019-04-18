angular.module('app.home').controller('homeCtrl',function($scope, globalsetting){
	 $scope.status="Successfull";
     $scope.firstV = 1000;
     $scope.fromConfig = globalsetting.appName;
})