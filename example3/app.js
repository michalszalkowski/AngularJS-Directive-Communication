angular.module('App', [])

	.controller('ModelCtrl', function ($scope) {
		$scope.model = {};
	})

	.directive('simpleForm', function () {
		return {
			restrict: 'E',
			scope: {
				'model': '='
			},
			templateUrl: 'simple-form.html',
			controller: function ($scope) {

				$scope.model.items = [];

				$scope.add = function () {
					$scope.model.items.push($scope.item);
					$scope.item = '';
				}
			}
		}
	})

	.directive('simpleList', function () {
		return {
			restrict: 'E',
			scope: {
				'model': '='
			},
			templateUrl: 'simple-list.html',
			controller: function ($scope) {
			}
		}
	})
;