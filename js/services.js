bandApp.factory('Data', function($http){
        return {
            getData : function(){
                var bandUrl = $http.get('data/band.json').success(function(bandInfo){
                    return bandInfo;
                });
                return bandUrl;
            }
        }
    });