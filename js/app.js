// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('hsif', ['ionic', 'hsif.controllers','ngRoute'])

.run(function($ionicPlatform,$rootScope,$state,$ionicLoading) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }



  });


    // Check for network connection
    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
        console.log('no Internet');
        $ionicPopup.confirm({
          title: 'No Internet Connection',
          content: 'Sorry, no Internet connectivity detected. Please reconnect and try again.'
        })
        .then(function(result) {
          console.log('Internet');
          if(!result) {
            ionic.Platform.exitApp();
          }
        });
      }
    }







})










.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(0);
$stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })


 


  // if none of the above states are matched, use this as the fallback

 // new route NG
.state('app.home', {
      url: '/home',
     
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })


  .state('app.sessions', {
    url: '/sessions',
    views: {
      'menuContent': {
        templateUrl: 'templates/sessions.html',
        controller: 'sessionsCtrl'
      }
    }
  })


  .state('app.speakers', {
    url: '/speakers',
    views: {
      'menuContent': {
        templateUrl: 'templates/speakers.html',
        controller: 'speakersCtrl'
      }
    }
  })  

  .state('app.abouthitachi', {
    url: '/abouthitachi',
    views: {
      'menuContent': {
        templateUrl: 'templates/abouthitachi.html',
        controller: 'abouthitachiCtrl'
      }
    }
  })  

   .state('app.openpoll', {
    url: '/openpoll',
    views: {
      'menuContent': {
        templateUrl: 'templates/openingpoll.html',
        controller: 'openingpollCtrl'
      }
    }
  }) 

   .state('app.timesnetwork', {
    url: '/timesnetwork',
    views: {
      'menuContent': {
        templateUrl: 'templates/timesnetwork.html',
        controller: 'timesnetworkCtrl'
      }
    }
  })  
    .state('app.agenda', {
    url: '/agenda',
    views: {
      'menuContent': {
        templateUrl: 'templates/agenda.html',
        controller: 'agendaCtrl'
      }
    }
  }) 
  
    .state('app.trivia', {
    url: '/trivia',
    views: {
      'menuContent': {
        templateUrl: 'templates/trivia.html',
        controller: 'triviaCtrl'
      }
    }
  })  


    .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })



    .state('app.register', {
    url: '/register',
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl'
      }
    }
  })


    .state('app.chatlist', {
    url: '/chatlist',
    views: {
      'menuContent': {
        templateUrl: 'templates/chatlist.html',
        controller: 'chatlistCtrl'
      }
    }
  })






    .state('app.queries', {
    url: '/queries',
    views: {
      'menuContent': {
        templateUrl: 'templates/queries.html',
        controller: 'queriesCtrl'
      }
    }
  })

  .state('app.chat', {
    url: '/chat/{id:int}',
    views: {
      'menuContent': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })




  $urlRouterProvider.otherwise('/app/home');
});
