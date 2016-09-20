'use strict';

angular.module('lookUp')
    .controller('LookUpController', ['$log', '$scope', function ($log, $scope) {
        $log.info('Look Up Controller loaded');

        this.user = {name: 'Blake'};
    }]);
