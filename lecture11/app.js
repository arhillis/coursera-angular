
(function() {
    'use strict';
    angular.module('msgApp', [])
    .controller('msgCtrlr', msgCtrlr);

    msgCtrlr.$inject = ['$scope', '$filter'];
  
    function msgCtrlr($scope, $filter, $injector){
     $scope.name = "Andrielle";
    $scope.age = "bigKid";

     $scope.sayMessage = function(){
        return this.name + " loves to code!";
     };

     $scope.changeAge = function(){

        this.age = (this.age === 'baby') ? 'bigKid' : 'baby';
     };
    }
  }());

