angular.module('myModule', [])

.controller('userController', function($scope, $http) {

	var page = 1;

	$scope.users = [];

	$scope.showInfo = false;

	$scope.moreResults = function() {
		page++;
		callApi(page);
	}

	callApi(1);

	function callApi(page) {
		return $http({
			method: 'GET',
			url: `https://randomuser.me/api/?page=${page}&results=12&seed=abc`
		}).then(function(response) {
			console.log(response.data.results);

			if (page > 1) {
				$scope.users = $scope.users.concat(response.data.results);
			} else {
				$scope.users = response.data.results;
			}

		});
	}

	$scope.showDetails = function(index) {
		$scope.showInfo = !$scope.showInfo;
		$scope.userIndex = index;
	}

});
