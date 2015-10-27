angular.module('photoEditorApp', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('photoEditorCtrl', ['$scope', function($scope){
    $scope.original = true;

    if ($scope.filterSelected == 1) {
        $scope.grayscale = true;
    }
    if ($scope.filterSelected == 2) {
        $scope.sepia = true;
    }
    if ($scope.filterSelected == 3) {
        $scope.saturate = true;
    }
    if ($scope.filterSelected == 4) {
        $scope.invert = true;
    }
    if ($scope.filterSelected == 5) {
        $scope.brightness = true;
    }
    if ($scope.filterSelected == 6) {
        $scope.contrast = true;
    }


}]);
