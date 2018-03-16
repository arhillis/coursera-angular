
(function() {
    'use strict';
    angular.module('myFirstApp', [])
    .controller('myFirstController', myFirstController);
  
    function myFirstController($scope){
     $scope.name = "Andrielle";
     $scope.sayHello = function(){
         return "Hello, " + this.name +"!!!!";
     };
    }
  
  }());