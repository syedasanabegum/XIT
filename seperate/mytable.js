angular.module('myDirectives', [])
  .directive('myTable', function() {
    return {
      restrict: 'E',
      scope: {
        data: '=',

      },
      templateUrl: 'myTable.html',
      controller: function($scope) {
        $scope.editRow = function(row) {
          $scope.$parent.editRow(row);
        };
  
        $scope.deleteRow = function(row) {
          $scope.$parent.deleteRow(row);
        };
      }
    };
  })
  .directive('myForm', function() {
    return {
      restrict: 'E',
      scope: {
        data: '=',
        onSave: '&'
      },
      templateUrl: 'myForm.html',
      controller: function($scope) {
        $scope.saveForm = function() {
          $scope.onSave( {updatedData :  angular.copy($scope.data)  });
          console.log($scope.updatedData) 
        };
        
      }
    };
  });
