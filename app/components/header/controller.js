angular.module('app').controller('appHeaderController', ['$scope', '$rootScope', '$http', 'userPersistenceService', '$state', function ($scope, $rootScope, $http, userPersistenceService, $state) {
    $scope.components = $rootScope.registerUserComponents($scope.component.data.components);
    $scope.gridOptions = {
        columns: 12,
        margins: [0, 0],
        resizable: { enabled: false }, draggable: { enabled: false }
    };
}]);