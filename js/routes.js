angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.contactInfo', {
    url: '/contact',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactInfo.html',
        controller: 'contactInfoCtrl'
      }
    }
  })

  .state('menu.schedule', {
    url: '/schedule',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.june11', {
    url: '/june11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/june11.html',
        controller: 'june11Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menu/home')

  

});