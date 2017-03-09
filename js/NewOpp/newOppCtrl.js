var app = angular.module('oppApp')

app.controller('NewOppCtrl', function($scope, OppService, oppsArray){

	$scope.showData = true;
	$scope.showInput = false;

	$scope.oppsArray = oppsArray

	$scope.addOpp = function(){
		$scope.newOpp.interactionScore = 0
		$scope.oppsArray.$add($scope.newOpp)
		$scope.newOpp = {};
	};

	$scope.removeOpp = function(item){
		$scope.oppsArray.$remove(item)
	};

	$scope.plus = function(item){
		if(!item.interactionScore){
			item.interactionScore = 0
		}
		item.interactionScore ++
		$scope.oppsArray.$save(item)
	};

	$scope.minus = function(item){
		if(!item.interactionScore){
			item.interactionScore = 0
		}
		item.interactionScore --
		$scope.oppsArray.$save(item)
	};

	$scope.saveData = function(item){
		$scope.oppsArray.$save(item)
	}

})