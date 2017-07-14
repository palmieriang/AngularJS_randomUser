angular.module('myModule', [])

.controller('userController', function($scope, $http) {

	var page = 1;

	$scope.users = [];

	$scope.moreResults = function() {
		page++;
		callApi(page);
	}

	callApi();

	function callApi(page) {
		return $http({
			method: 'GET',
			url: `https://randomuser.me/api/?page=${page}&results=12&seed=abc`
		}).then(function(response) {

			if (page > 1) {
				$scope.users = $scope.users.concat(response.data.results);
			} else {
				$scope.users = response.data.results;
			}

		});
	}

});
