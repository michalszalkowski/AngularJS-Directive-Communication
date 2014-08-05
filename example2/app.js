angular.module('App', [])

	.controller('bondingCtrl', function ($scope) {
		$scope.model = 'lorem';
		$scope.someMethod = function () {
			$scope.model = 'lorem';
		};
	})

	.directive('simple', function () {
		return {
			restrict: 'E',
			scope: {
				'name': '@',
				'model': '='
			},
			template: '<br/><button ng-click="someMethod()"> from directive: {{name}}</button>{{model}}',
			controller: function ($scope) {
				$scope.someMethod = function () {
					$scope.model = $scope.name;
				};
			}
		}
	})
;