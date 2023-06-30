angular.module('myControllers', [])
.controller('MainController', ['$scope','$http', function($scope, $http) {
    $scope.tableData = []; 
    $scope.selectedRowData = {}; 
    $scope.newData = {};
    
  
     $http.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001').then(function(response) {
      $scope.tableData = response.data;
    });
  
    $scope.editRow = function(row) {
      $scope.selectedRowData = angular.copy(row);
    };
  
    $scope.deleteRow = function(row) {
      var index = $scope.tableData.indexOf(row);
      console.log(index);
      if (index !== -1) {
        $scope.tableData.splice(index, 1);
      }
    };

    $scope.saveForm = function(updatedData) {
      if (updatedData && updatedData.id) {
        var index = $scope.tableData.findIndex(function(row) {
          return row.id === updatedData.id;
        });
        console.log(index);
        if (index !== -1) {
          $scope.tableData[index] = angular.copy(updatedData);
          console.log($scope.tableData[index]);
        }
      }
      
      $scope.selectedRowData = {}; // Reset selected row data
    };

    
  }]);