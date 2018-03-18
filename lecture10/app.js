
(function() {
    'use strict';
    angular.module('depInjApp', [])
    .controller('depInjCtrlr', depInjCtrlr);

    depInjCtrlr.$inject = ['$scope', '$filter'];
  
    function depInjCtrlr($scope, $filter, $injector){
     $scope.name = "Andrielle";
     $scope.sayHello = function(){
         return "Hello, " + this.name +"!!!!";
     };

     $scope.upper = function(){

         let upcase = $filter("uppercase");
         $scope.name = upcase($scope.name);
     };
    }
  }());

