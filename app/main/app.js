'use strict';
const myApp = angular.module('billpay', [
    'ui.router',
    'app.controllers',
    'app.directives',
    'app.filters',
    'ngStorage',
    'ui.router.state.events',
    'ngResource',
    'app.factories',
    'app.services',
    'ngAnimate'
]);
angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.factories', []);
angular.module('app.directives', []);
angular.module('app.filters', []);