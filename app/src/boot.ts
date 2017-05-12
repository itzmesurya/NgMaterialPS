/// <reference path="_all.ts" />

module ContactManagerApp {
    angular.module('contactManagerApp', ['ngMaterial', 'ngMdIcons'])
        .controller('mainController', MainController)
        .config(($mdIconProvider: angular.material.IIconProvider,
            $mdThemingProvider: angular.material.IThemingProvider) => {
            $mdIconProvider.icon('menu', './assets/svgs/menu.svg', 24);
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');
            $mdIconProvider.icon('face', './assets/svgs/face.svg', 24);
        });
}