var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/signup.html',
      controller: 'SignupController'
    })
    .when('/logic', {
      templateUrl: './views/login.html',
      controller: 'LogicController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('SignupController', function($scope, $http, $location) {
  $scope.signupData = {};

  $scope.signup = function() {
    $http.post('https://jsonplaceholder.typicode.com/posts', $scope.signupData)
      .then(function(response) {
        // Signup successful, redirect to logic page
        console.log($scope.signupData)
        $location.path('/logic');
      })
      .catch(function(error) {
        console.error('Signup failed:', error);
      });
  };
});


app.controller('LogicController', function($scope, $http) {
  $scope.loginData = {};

  $scope.login = function() {
    $http.get('https://dummyjson.com/users/1')
      .then(function(response) {
        var savedData = response.data;

        if (Array.isArray(savedData)) {
          var match = savedData.find(function(item) {
            return item.username === $scope.loginData.username && item.password === $scope.loginData.password;
          });

          if (match) {
            console.log('Login successful');
            // Perform desired action for successful login
          } else {
            console.log('Invalid credentials');
            // Handle invalid credentials
          }
        } else {
          if (
            savedData.username === $scope.loginData.username &&
            savedData.password === $scope.loginData.password
          ) {
            console.log('Login successful');
            // Perform desired action for successful login
          } else {
            console.log('Invalid credentials');
            // Handle invalid credentials
          }
        }
      })
      .catch(function(error) {
        console.error('Login failed:', error);
      });
  };
});
