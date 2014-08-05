angular.module('App', [])

	.service('simpleService', function () {

		var self = this;

		this.model = {todos: []};

		this.add = function (todo) {
			self.model.todos.push(todo);
		}

		this.get = function () {
			return self.model.todos;
		}

		this.delete = function (todo) {
			var index = self.model.todos.indexOf(todo);
			if (index > -1) {
				self.model.todos.splice(index, 1);
			}
		}
	})

	.directive('simpleForm', function (simpleService) {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'simple-form.html',
			controller: function ($scope) {
				$scope.add = function () {
					simpleService.add($scope.todo);
					$scope.todo = {};
				}
			}
		}
	})

	.directive('simpleList', function (simpleService) {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'simple-list.html',
			controller: function ($scope) {

				$scope.items = simpleService.get();

				$scope.delete = function (item) {
					simpleService.delete(item);
				}
			}
		}
	})
;