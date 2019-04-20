myApp.config(function(globalsettingProvider) {
    globalsettingProvider.setAppName("Infragistics App");
}).provider('globalsetting', function() {
    var appname = "LAWYER APP";
    this.setAppName = function(value) {
        appname = value;
    }
    this.$get = function() {
        return {
            appName: appname,
            apiServer: "https://jsonplaceholder.typicode.com"
        };
    }
}).config(function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [{
            name: 'CustomFilter',
            files: [
                'common/filters/filter.js'
            ]
        }, {
            name: 'CustomDirective',
            files: [
                'common/directives/directive.js'
            ]
        }, {
            name: 'Tooltip',
            files: [
                "lib/angular-tooltips/dist/angular-tooltips.min.js",
                "lib/angular-tooltips/dist/angular-tooltips.min.css"
            ]
        }, {
            name: 'NgStorage',
            files: [
                "lib/ngstorage/ngStorage.min.js"
            ]
        }],
    });
});