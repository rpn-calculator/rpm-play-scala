'use strict';

angular.module('lookUp')
    .controller('LookUpController', ['$log', '$scope', '$base64', '$http', function ($log, $scope, $base64, $http) {
        $log.info('Look Up Controller loaded');

        $scope.resetResult = function () {
            $scope.result = '';
        };

        $scope.onCalculate = function () {
            $log.info('InFix: ', $scope.inFix);
            $log.info('Base 64: ', $base64.encode($scope.inFix));

            $http.get("/calculus", {
                params: {
                    "query": $base64.encode($scope.inFix)
                }
            })
            .then(function onSuccess(response) {
                $log.info('http get triggered');
                $log.info(response);
                $scope.result = response.data.result;
            }, function onError(response) {
                $scope.result = response.data.message;
            });
        }
    }]);
