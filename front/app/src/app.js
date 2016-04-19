angular
    .module('starterApp', ['ngMaterial', 'accueil', 'operateur', 'ngRoute'])
    .config(function($mdThemingProvider, $mdIconProvider, $routeProvider){

        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu"       , "./assets/svg/menu.svg"        , 24)
            .icon("share"      , "./assets/svg/share.svg"       , 24)
            .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
            .icon("phone"      , "./assets/svg/phone.svg"       , 512);

        /*$mdThemingProvider.theme('default')
         .primaryPalette('brown')
         .accentPalette('red');*/

        $routeProvider.
        when('/phones', {
            templateUrl: 'src/client/accueil/accueil.html',
            controller: 'AccueilController'
        }).
        when('/home', {
            templateUrl: 'src/operateur/home.html',
            controller: 'HomeController'
        })

    });
