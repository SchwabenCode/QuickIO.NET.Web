angular.module('QuickIO.Modules.ExampleModule', ['ui.router'])
.config(
  ['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {
          $stateProvider
              .state('Examples', {
                  url: '/Examples',
                  abstract: true,
                  templateUrl: 'views/Examples/Examples.html'
              })
              .state('Examples.Home', {
                  url: '',
                  templateUrl: 'views/Examples/Home.html'
              })
              .state('Examples.Jobs', {
                  url: '/Jobs',
                  templateUrl: 'views/Examples/Jobs.html'
              })
              .state('Examples.Observer', {
                  url: '/Observer',
                  templateUrl: 'views/Examples/Observer.html'
              })
              .state('Examples.Services', {
                  url: '/Services',
                  templateUrl: 'views/Examples/Services.html'
              });

      }]
);

angular.module('QuickIO', ['QuickIO.Modules.ExampleModule', 'ui.router', 'ngAnimate'])
.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])
.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            .state("Home", {
                url: "/",
                templateUrl: 'views/Home.html',
            });
    }]
);
