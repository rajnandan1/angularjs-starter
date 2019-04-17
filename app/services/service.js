angular.module('app.services').service('CustomService',function($resource, globalsetting){
	 return $resource(globalsetting.apiServer + '/todos/1', {}, {
        get: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
})