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
    })
    .state('login', {
      url: '/login',
      templateUrl: 'states/login.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'states/signup.html'
    })
    .state('rofile', {
      url: '/profile',
      templateUrl: '/states/profile.html',
      resolve: {
        currentAuth: [
          'AuthFactory',
          (AuthFactory) => {
            return AuthFactory.$requireSignIn();
          }
        ]
      }
    });

  $urlRouterProvider.otherwise('/');


}
MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function AuthCatcher($rootScope, $state) {
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED'){
      $state.go('home');
    }
  });
}
angular
    .module('DisApp', ['ui.router', 'firebase'])
    .config(MainRouter)
    .constant('API_URL', 'http://localhost:3000')
    .run(AuthCatcher);
