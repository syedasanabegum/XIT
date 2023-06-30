angular.module('myApp', [])
  .controller('EmployeeController', function($scope, $http) {
    $scope.selectedEmployee = null;
    $scope.employees = [];

    // Fetch employee data from API
    $http.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
      .then(function(response) {
        $scope.employees = response.data;
      })
      .catch(function(error) {
        console.log('Error fetching employees:', error);
      });

    // Edit an employee record
    $scope.editEmployee = function(employee) {
      $scope.selectedEmployee = angular.copy(employee);
    };

    // Delete an employee record
    $scope.deleteEmployee = function(employee) {
      var index = $scope.employees.indexOf(employee);
      if (index !== -1) {
        $scope.employees.splice(index, 1);
      }
    };

    // Save changes to an employee record
    $scope.saveEmployee = function(employee) {
      if (employee.id) {
        // Existing employee, update record
        var index = $scope.employees.findIndex(function(emp) {
          return emp.id === employee.id;
        });
        if (index !== -1) {
          $scope.employees[index] = angular.copy(employee);
        }
      } 
      $scope.selectedEmployee = null; // Clear the form
    };

    
  })
  .directive('myTable', function() {
    return {
      restrict: 'E',
      scope: {
        employees: '=',
        onEdit: '&',
        onDelete: '&'
      },
      controller: 'TableController',
      templateUrl: './views/table.html'
    };
  })
  .directive('myForm', function() {
    return {
      restrict: 'E',
      scope: {
        employee: '=',
        onSave: '&'
      },
      controller: 'FormController',
      templateUrl: './views/form.html'
    };
  })
  .controller('TableController', function($scope) {
    $scope.editEmployee = function(employee) {
      $scope.onEdit({ employee: employee });
    };

    $scope.deleteEmployee = function(employee) {
      $scope.onDelete({ employee: employee });
    };
  })
  .controller('FormController', function($scope) {
    $scope.saveEmployee = function() {
      $scope.onSave({ employee: $scope.employee });
    };
  });
