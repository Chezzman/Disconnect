function MainRouter($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/states/home.html'
    })
    .state('apps', {
      url: '/apps',
      templateUrl: '/states/apps.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/states/contact.html'
    });



}

angular
    .module('DisApp', ['ui.router', 'firebase'])
    .config(MainRouter)
    .constant('API_URL', 'http://localhost:3000')
