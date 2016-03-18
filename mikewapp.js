angular.module("getSwole", [])
  .controller("WorkoutListController", function($scope){
    $scope.title = "My title";
    $scope.exerciseGroups = ["Chest", "Back", "Shoulders", "Legs", "Arms"];
    $scope.workouts = [];

    $scope.addWorkout = function(){
      $scope.workouts.push($scope.exercise);
      $scope.exercise = {};
    }
  });