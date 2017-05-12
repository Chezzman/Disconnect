/* global firebase */

function AuthRun(){
  var config = {
    apiKey: 'AIzaSyCAHT2ycQAPOm-4e0EHreKQRVdFgyI4fXY',
    authDomain: 'disconnectworld-22cdd.firebaseapp.com',
    databaseURL: 'https://disconnectworld-22cdd.firebaseio.com',
    projectId: 'disconnectworld-22cdd',
    storageBucket: 'disconnectworld-22cdd.appspot.com',
    messagingSenderId: '637553385772'
  };
  firebase.initializeApp(config);
}
function AuthFactory($firebaseAuth){
  return $firebaseAuth();
}

AuthFactory.$inject = ['$firebaseAuth'];

angular
  .module('DisApp')
  .run(AuthRun)
  .factory('AuthFactory', AuthFactory);
