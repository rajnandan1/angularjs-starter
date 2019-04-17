myApp.run(function($localStorage,globalsetting) {
    console.log("app run");
    $localStorage.appname = globalsetting.appName;
});