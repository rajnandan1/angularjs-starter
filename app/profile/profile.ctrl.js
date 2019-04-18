angular.module('app.profile').controller('profileCtrl',function($scope, globalsetting){
	 $scope.status="Successfull";
     $scope.firstV = 1000;
     $scope.fromConfig = globalsetting.appName;
})