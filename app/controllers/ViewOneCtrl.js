angular.module('app.controllers').controller('ViewOneCtrl',function($scope, globalsetting, CustomFactory, CustomService){
	 $scope.status="Successfull";
     $scope.firstV = 1000;
     $scope.fromConfig = globalsetting.appName;
    
    $scope.customFactoryText = CustomFactory.text();
    
    CustomService.get().$promise.then(function(data){
       $scope.customServiceText = data
    })
})