angular.module('app').factory('ConfigService', [function() {

    var service = {};

    //service.apiBase = 'http://localhost:8001/';
    service.apiBase = 'http://quizapici-env.eba-warmfypq.us-west-2.elasticbeanstalk.com/'

    return service;
}]);