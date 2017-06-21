(function(){
angular.module('friendlist')
	.service('FriendListService', ['$http', 'API_BASE', function($http, API_BASE){
		var friendService = this;
		friendService.friends = [];

		friendService.save = function(newFriend) {
			return $http.post(API_BASE, newFriend)
				.then(function(response){
					friendService.friends.push(response.data);
					return response.data;
				});
		};

		friendService.fetchAll = function() {
			return $http.get(API_BASE)
				.then(function(response){
					friendService.friends = response.data;
					return friendService.friends;
				});
		};

		friendService.getFriends = function() {
			return friendService.friends;
		};

		friendService.deleteFriend = function(friend) {
			var deleteData = friend.id;
			var friendIndex = friendService.friends.indexOf(friend);
			friendService.friends.splice(friendIndex, 1);
			//console.log(deleteData);
			return $http.delete(API_BASE + "/" + deleteData)
				.then(function(response){
					//console.log(response);
				})
		}
	}]);
})();