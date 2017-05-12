/// <reference path="_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module('contactManagerApp', ['ngMaterial', 'ngMdIcons'])
        .controller('mainController', ContactManagerApp.MainController)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider.icon('menu', './assets/svgs/menu.svg', 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
        $mdIconProvider.icon('face', './assets/svgs/face.svg', 24);
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map