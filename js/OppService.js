
var app = angular.module('oppApp');


app.service('OppService', function($firebaseArray){
	var firebaseUrl = 'https://rockys-app.firebaseio.com/'

	this.getOpps = function(){
		return $firebaseArray(new Firebase(firebaseUrl + 'opps'))
	}

})