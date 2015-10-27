angular.module('memeAlbumApp', ['ionic', 'ngCordova'])

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


.controller('memeAlbumCtrl', ['$scope', function($scope){
	$scope.layout = 'grid';

    $scope.memes = [
        { img: "img/meme0.png", name: "Doge", text: "WOW" },
        { img: "img/meme1.png", name: "Ancient Alien", text: "Asians" },
        { img: "img/meme2.png", name: "One Does Not Simply", text: "Walk into Mordor" },
        { img: "img/meme3.png", name: "Brace Yourselves", text: "Winter is coming" },
        { img: "img/meme4.png", name: "First World Problems" },
        { img: "img/meme5.png", name: "Success kid", text: "Win baby!" },
        { img: "img/meme6.png", name: "Condescending Wonka" },
        { img: "img/meme7.png", name: "Philosoraptor" },
        { img: "img/meme8.png", name: "Overly attached girlfriend" },
        { img: "img/meme9.png", name: "Grumpy Cat" },
        { img: "img/meme11.png", name: "Not Sure if this app is good", text: "or not" },
        { img: "img/meme14.png", name: "Side Eyeing Chloe" },
        { img: "img/meme15.png", name: "Bad Luck Brian" }
    ];



}]);
