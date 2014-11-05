angular.module("myApp", [])
.controller('mainCtrl', function($scope){
	$scope.books = [
		{title: 'Strange', price: 100},
		{title: 'Agi', price: 100},
		{title: 'Int', price: 100}
	];
})