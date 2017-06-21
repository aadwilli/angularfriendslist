(function(){
	var app = angular.module('friendlist', ['ngRoute'])

	.constant('API_BASE', 'http://rest.learncode.academy/api/aadwilli/friends')

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/landing-page.html'
			})
			.when('/friendlist', {
				templateUrl: 'views/friendlist.html',
				controller: 'FriendListController',
				controllerAs: 'friendlist',
				resolve: {
					friends:['FriendListService', function(FriendListService) {
							return FriendListService.fetchAll();

						}
					]
				}
			}).otherwise({
				redirectTo: '/landing-page'
			})
			.when('/landing-page', {
				templateUrl: 'views/landing-page.html',
			});
	}]);
})();