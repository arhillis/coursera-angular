
(function() {
    'use strict';
    angular.module('myFirstApp', [])
    .controller('myFirstController', myFirstController);
  
    function myFirstController($scope){
     $scope.name = "Andrielle";
    }
  
  }());