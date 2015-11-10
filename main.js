var app = angular.module('TodoApp', []);

app.controller('TodoController', function($scope){
	$scope.title = "Welcome to your todo app";

	$scope.todos = [
		{name: "take out the garbage"},
		{name: "feed the cat"},
		{name: "give the dog medicine"}
	];
});

app.controller('pastaController', function($scope){
	$scope.pasta = "I love carbs";
	$scope.foods = '';
});