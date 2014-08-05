angular.module('App', [])

	.controller('bondingCtrl', function ($scope) {

		$scope.model = 'lorem';

		$scope.ctrl = {
			api: {
				set: function (newModel) {
					$scope.model = newModel;
				},
				get: function () {
					return $scope.model;
				}
			}
		}
	})

	.directive('simple', function () {
		return {
			restrict: 'E',
			scope: {
				'name': '@',
				'api': '='
			},
			template: '<button ng-click="someMethod()">{{name}}</button>',
			controller: function ($scope) {
				$scope.someMethod = function () {
					$scope.api.set($scope.name);
				};
			}
		}
	})
;