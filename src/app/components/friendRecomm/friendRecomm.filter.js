(function() {
  'use strict';
  angular.module('frontendTask')
    .filter('friendRecomm', function() {
      return function(input, selectedRoomType) {
        var key = selectedRoomType.split(' ').map(function(item) {
          return item.toLocaleLowerCase();
        }).join('-');
        var result = '';
        var friends = input[key]['friends'];
        friends.sort();
        switch (friends.length) {
          case 0:
            break;
          case  1:
            result  = friends.slice(0,1) + ' has stayed here';
            break;
          case  2:
            result  = friends.slice(0,2).join(' and ') + ' have stayed here';
            break;
          case  3:

            result  = friends.slice(0,2).join(', ') + ' and 1 other friend have stayed here';
            break;
          default:
            result  = friends.slice(0,2).join(', ') + ' and ' +(friends.length - 2)+ ' other friends have stayed here';
            break;
        }
        return result;
      };
    });
})();
