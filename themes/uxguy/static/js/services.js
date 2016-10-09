angular.module('pixelUpApp.services', []).factory('Speaker', function($resource) {
  return $resource('/api/speakers:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});
