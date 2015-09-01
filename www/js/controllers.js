angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {

  var secretCode = [0, 1, 2, 3];
  var userGuess = [];


  // These icon classes are for mapping the selected guesses to the UI
  $scope.icons = ['ion-social-apple', 'ion-social-android','ion-social-angular','ion-social-html5'];

  // The current selected icon to assign to any clicked position.
  $scope.selectedIcon = 0;

  $scope.setSelected = function(num) {
    $scope.selectedIcon = num;
    console.log($scope.selectedIcon)
  }

  // Initialize game state
  $scope.newGame = function() {
    // TODO: Set all data properties/structures to their beginning state
    $scope.selectedIcon = 0;

  };

  // Run newGame() upon loading
  $scope.newGame();
  $scope.setUserCode = function(position) {
    userGuess[position] = $scope.selectedIcon;
    console.log(userGuess);
  }
  /*
  TODO: Call this function when the user clicks a 'score' button.
        The 'score' button should remain disabled until all positions have a value.
        Maybe a button with an icon of a checkmark would be a good UI choice? Or,
        just use a small button with text of 'Score'?
  */
  $scope.scoreTurn = function() {
    // TODO: Score the turn

    // TODO: Show winModal IF turn is correct. Put below line in an if statement.
    // $scope.winModal.show();
  };


  // Create the winner modal.
  $ionicModal.fromTemplateUrl('templates/winner.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.winModal = modal;
  });

  // TODO: Call this function from the 'Play Again!' button in winModal's html (winner.html)
  $scope.playAgain = function() {
    $scope.newGame();
    $scope.winModal.hide();
  };

});

