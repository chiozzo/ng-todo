var app = angular.module('TodoApp', []);

app.controller('TodoController', function($scope){
	$scope.title = "Welcome to your todo app";
});

app.controller('pastaController', function($scope){
	$scope.pasta = "I love carbs";
	$scope.foods = '';
});