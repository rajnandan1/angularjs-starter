'use strict';
const myApp = angular.module('billpay', [
    'ui.router',
    'app.controllers',
    'app.directives',
    'app.filters',
    'ui.router.state.events',
    'ngResource',
    'app.factories',
    'app.services',
    'ngAnimate',
    'oc.lazyLoad'
]);
angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.factories', []);
angular.module('app.directives', []);
angular.module('app.filters', []);

angular.module('app.home', ['720kb.tooltips']);
angular.module('app.profile', []);

angular.module('app.abstract', []);

angular.module('app.abstract.first', []);