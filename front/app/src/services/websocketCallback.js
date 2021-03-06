(function() {
    angular
        .module('notification')
        .service('WebsocketCallbackService', WebsocketCallbackService);

    function WebsocketCallbackService($mdBottomSheet, NotificationService, $routeParams) {

        var initialisation = function() {

            if (!$routeParams.telephone) {
                $routeParams.telephone = "0645854712"
            }

            NotificationService.connect($routeParams.telephone, "victime");

            NotificationService.setCbVideo(function () {
                $mdBottomSheet.show({
                    templateUrl: 'src/client/accueil/bottomSheet/video.html',
                    locals:{telephone: $routeParams.telephone},
                    controller: function ($scope, $mdBottomSheet, telephone) {
                        $scope.telephone = telephone;
                        $scope.fermer = function () {
                            $mdBottomSheet.hide();
                        }
                    }
                });
            });

            NotificationService.setCbPhoto(function () {
                $mdBottomSheet.show({
                    templateUrl: 'src/client/accueil/bottomSheet/photo.html',
                    locals:{telephone: $routeParams.telephone},
                    controller: function ($scope, $mdBottomSheet, telephone) {
                        $scope.telephone = telephone;
                        $scope.fermer = function () {
                            $mdBottomSheet.hide();
                        }
                    }
                });
            });

            NotificationService.setCbTexte(function (lienFiche) {
                //TODO: Ajouter le numero du client dans l'url (pour que la redirection soit effective)
                $mdBottomSheet.show({
                    templateUrl: 'src/client/accueil/bottomSheet/reflexe.html',
                    locals: {
                        lienFiche: lienFiche
                    },
                    controller: function ($scope, $mdBottomSheet, lienFiche) {
                        $scope.lien = lienFiche;
                        $scope.fermer = function () {
                            $mdBottomSheet.hide();
                        }
                    }
                });
            });

            initialized = true;
        };

        var initialized = false;

        var init = function () {
            if (!initialized) initialisation();
        };

        return {
            init: init
        };
    }
})();