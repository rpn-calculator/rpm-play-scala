angular.module('components')

.component('banner', {
    bindings: {
        expression: '=',
        result: '='
    },
    templateUrl: 'app/js/shared/ngComponents/common/banner.html'
});
