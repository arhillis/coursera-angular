
(function() {
    'use strict';
    angular.module('nameCalculator', [])
    .controller('nameCalculatorController', nameCalculatorController);
  
    function nameCalculatorController($scope){
     $scope.name = "";
     $scope.totalValue = 0;

     $scope.displayNumeric = function(){
        let totalNameValue = numericForString(this.name);
        this.totalValue = totalNameValue;
     };

    }
  
    function numericForString(string){
        let totalStringValue = 0;

        for(let s in string){
            totalStringValue += string.charCodeAt(s);
        }
        
        return totalStringValue;
    }
  }());