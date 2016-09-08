angular.module('hsif.controllers', [])




.controller('AppCtrl', function($scope, $ionicModal, $timeout,$rootScope,$state) {

      $rootScope.fromid=localStorage.getItem("userId");
     $rootScope.loginuserv=JSON.parse(localStorage.getItem("loginuser"));
      

      $rootScope.checkuserlogin=function(ab){
      console.log($rootScope.fromid);
      if(!$rootScope.fromid){
        console.log('abc');
       $state.go('app.login');
       
      }else{
         $state.go('app.'+ab);
         console.log('xyz');
      }
      }
  })


.controller('homeCtrl', function($scope,$state,$ionicNavBarDelegate) {
$scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
});
})
.controller('sessionsCtrl',  function($scope) {
  
    $scope.sptabs = [
             {
            stitle: 'Data Solutions',
            url: 'sshitachidata.html'
             },
           { stitle: 'Payment Solutions',
            url: 'sspayment.html'
             }, 
             {
            stitle: 'IT Solutions',
            url: 'ssmicroclinic.html'
             },
        {
            stitle: 'Railway Solutions',
            url: 'ssrailways.html'
        }];

    $scope.spcurrentTab = 'sshitachidata.html';
    $scope.onClickTab = function (tab) {
        $scope.spcurrentTab = tab.url;
    }
    $scope.isActiveTab = function(stabUrl) {
        return stabUrl == $scope.spcurrentTab;
    }
})


.controller('speakersCtrl', ['$scope', function($scope){
  
    $scope.tabs = [{
            ptitle: 'Payment',
            url: 'payment.html'
        }, 
        {
            ptitle: 'IT Solutions',
            url: 'microclinic.html'
        },
         {
            ptitle: 'Data Solutions',
            url: 'hitachidata.html'
    },
    {
            ptitle: 'Railways',
            url: 'railways.html'
    }
    ];

    $scope.currentTab = 'payment.html';
    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}])



.controller('speakPaymentCtrl', function($scope,$ionicLoading,$http){
 $ionicLoading.show({template: 'Loading...'});
  $http.get('http://times-hitachi.cruxservers.in/api/?method=getPage&id=123')
.success(function(response){
     $ionicLoading.hide();
 // $scope.triviaRailway=response.content;
  //console.log(response);
     $scope.speakpayment = response.content;
})
})


.controller('speakHdsCtrl', function($scope,$ionicLoading,$http){
 $ionicLoading.show({template: 'Loading...'});
  $http.get('http://times-hitachi.cruxservers.in/api/?method=getPage&id=135')
.success(function(response){
     $ionicLoading.hide();
 // $scope.triviaRailway=response.content;
 // console.log(response);
     $scope.speakhds = response.content;
})
})


.controller('speakMicroCtrl', function($scope,$ionicLoading,$http){
 $ionicLoading.show({template: 'Loading...'});
  $http.get('http://times-hitachi.cruxservers.in/api/?method=getPage&id=144')
.success(function(response){
     $ionicLoading.hide();
 // $scope.triviaRailway=response.content;
  //console.log(response);
     $scope.speakmicroit = response.content;
})
})

.controller('speakRailCtrl', function($scope,$ionicLoading,$http){
 $ionicLoading.show({template: 'Loading...'});
  $http.get('http://times-hitachi.cruxservers.in/api/?method=getPage&id=146')
.success(function(response){
     $ionicLoading.hide();
 // $scope.triviaRailway=response.content;
 // console.log(response);
     $scope.speakrailway = response.content;
})
})




.controller('abouthitachiCtrl', ['$scope', function($scope){
   
}])

.controller('agendaCtrl', ['$scope', function($scope){
   
}])

.controller('openingpollCtrl', function($scope, $http,$ionicLoading,$state,$ionicNavBarDelegate){
//$scope.userid=localStorage.getItem("userId");
$scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
});
$scope.reloadresult=function(){
  $state.go($state.current, {}, {reload: true});
}



$scope.pollstatus="";
$http.get('http://times-hitachi.cruxservers.in/api/?method=checkPollStatus')
.success(function(response){
 // console.log("---"+response);
 $scope.pollstatus=response

if($scope.pollstatus=='true'){
   $scope.pollstatic=false;
  $scope.polld={};
  $http.get('http://times-hitachi.cruxservers.in/api/?method=getPolls&userId='+$scope.fromid)
.success(function(response){



  $scope.polld= response;
  console.log($scope.polld);

})
} else{
  $scope.pollstatic=true;
}
})





$scope.ans={};
var pollurl = new Array();
 $scope.plarray=[];

$scope.pollsubmit=function(ansId, qtId){
  console.log(ansId)
if(!ansId){
  $('#err_'+qtId).text('Please select an answer')
  return false;
}

  
$scope.pollurl=$scope.plarray.join('&');
 $ionicLoading.show({template: 'Loading...'});
$http({
  method: 'GET',
  url: 'http://times-hitachi.cruxservers.in/api/?method=vote&pollid['+qtId+']='+ansId+'&userId='+$scope.fromid
}).then(function successCallback(response) {
   $ionicLoading.hide();
   
      $('#err_'+qtId).empty()

    $scope.getpolldata=response.data;

$.each($scope.getpolldata,function(k,v){
$.each(v,function(g,y){
$('#per_'+k+'_'+y.id).text(y.per+'%');
$('#per_'+k+'_'+y.id).addClass('pollscore');
 // $('#qn_'+k).replaceWith('<div class="successmsg" ng-click="reloadresult()">Thank you. Your vote submitted successfully</div>');
$('#qn_'+k).css('display','none');
$('#psub_'+k).css('display','block');

$('#qnp_'+k).append(' <div class="overlay"> </div>');

console.log('#qn_'+k);

});
});
console.log($scope.getpolldata)
  }, function errorCallback(response) {
    $ionicLoading.hide();
    $scope.result='Please try agail';
  });


}


})


.controller('timesnetworkCtrl', ['$scope', function($scope){
  
}])




.controller('triviaCtrl',function($scope,$http){



  $scope.tabs = [
            { stitle: 'Data Solutions',
            url: 'trivia-datasolution.html'
             }, 
             {
            stitle: 'Payment',
            url: 'trivia-payment.html'
        },
           { stitle: 'Railway',
            url: 'trivia-railway.html'
             }, 
             {
            stitle: 'IT Solutions',
            url: 'trivia-itsolution.html'
             }
        ];

    $scope.currentTab = 'trivia-datasolution.html';
    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }

})


.controller('triviaDatasolutionCtrl',  function($scope,$http,$ionicLoading){
     $ionicLoading.show({template: 'Loading...'});
  $http.get('http://times-hitachi.cruxservers.in/api/?method=getPage&id=58')
.success(function(response){
     $ionicLoading.hide();
 // $scope.triviaRailway=response.content;
  //console.log(response);
     $scope.triviadatasolution = response.content;
})
})


.controller('triviaRailwayCtrl',  function($scope,$http,$ionicLoading){
     $ionicLoading.show({template: 'Loading...'});
  $http.get('http://times-hitachi.cruxservers.in/api/?method=getPage&id=23')
.success(function(response){
     $ionicLoading.hide();
 // $scope.triviaRailway=response.content;
 // console.log(response);
     $scope.triviaRailway = response.content;
})
})






.controller('triviaItsolutionCtrl',  function($scope,$http,$ionicLoading,$timeout){
     $ionicLoading.show({template: 'Loading...'});
  $http.get('http://times-hitachi.cruxservers.in/api/?method=getPage&id=33')
.success(function(response){
     $ionicLoading.hide();
 // $scope.triviaRailway=response.content;
  //console.log(response);
     $scope.triviIt = response.content;
$timeout(function () {
 appbrowserlink();}, 1000);
})
})

.controller('triviaPaymentCtrl',  function($scope,$http,$ionicLoading,$timeout){
     $ionicLoading.show({template: 'Loading...'});
  $http.get('http://times-hitachi.cruxservers.in/api/?method=getPage&id=37')
.success(function(response){
     $ionicLoading.hide();
 // $scope.triviaRailway=response.content;
  //console.log(response.content);
     $scope.triviaPayment = response.content;
     $timeout(function () {
 appbrowserlink();}, 1000);
})
})



.controller('triviaLatestCtrl',function($scope,$ionicLoading,$http,$timeout){
  $ionicLoading.show({template: 'Loading...'});

  $http.get('http://times-hitachi.cruxservers.in/api/?method=latestInfo')
.success(function(response){
 // console.log(response);
   $ionicLoading.hide();
     $scope.triviItlatest = response;
     $timeout(function () {
 appbrowserlink();}, 1000);

})



})




.controller('loginmodalCtrl', ['$scope','$http','$ionicModal', function($scope,$http,$ionicModal){
      // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/signin.html', function($ionicModal) {
        $scope.modal = $ionicModal;
    });


   
   
}])


.controller('loginCtrl', function($scope, $rootScope, $state, $http,$window,$ionicHistory,$ionicLoading){
 $scope.mclosemodal=function(){
  $scope.modal.hide();

    }

console.log($scope.fromid);
if($scope.fromid){
  $state.go('app.home',{},{reload: true});
 // $ionicHistory.clearCache();
  //$window.location.reload(true);
}



  $scope.loginaction=function(lg){
     $ionicLoading.show({template: 'Loading...'});
  $http({
  method:'POST',
  url:'http://times-hitachi.cruxservers.in/api/?method=checkLogin&useremail='+lg.username+'&password='+lg.password
}).success(function(response){
   $ionicLoading.hide();
console.log(response);
if(response!=false){
  $scope.ldata=response.data
 // console.log($scope.ldata.ID)
  localStorage.setItem('userId',$scope.ldata.ID);
  localStorage.setItem('loginuser',angular.toJson($scope.ldata));
  //$ionicHistory.clearCache()
  // 

     $state.go('app.home',{},{reload: true});
    // $scope.$apply();
     // $window.location.reload(true);
 

 }else{

  $scope.loginerror=true;
 }

})
}

$scope.gotopage=function(){
   $scope.modal.hide();
    $ionicHistory.nextViewOptions({disableBack: true});
    $state.go('app.register');
}





})

.controller('logoutctrl', function($scope,$state,$window){

  $scope.logout=function(){
    localStorage.clear();
  // $window.location.reload(true);
    $state.go('app.home',{},{reload: true});
    console.log('signout');
  }
})

.controller('registerCtrl',function($scope,$http,$state,$window,$ionicLoading){
  $scope.reg = {};
  $scope.submitform = function(reg){
 var data = reg;
 console.log(reg);
  $ionicLoading.show({template: 'Loading...'});
    $http({
      method:'POST',
      url:'http://times-hitachi.cruxservers.in/api/?method=registerUser&firstname='+data.firstname+'&companyname='+data.companyname+'&designation='+data.designation+'&useremail='+data.useremail+'&phone='+data.phone+'&password='+data.password
      
    }).then(function(response){
      $ionicLoading.hide();
      if(response.data.data!=false){
       localStorage.setItem('userId',response.data.id);
       localStorage.setItem('loginuser',angular.toJson(reg));
      // $window.location.reload(true);
       $state.go('app.home',{},{reload: true});
       }else{
        $scope.rerror='Sorry, that username already exists!';
       }
       
    })
  }
})

.controller('chatlistCtrl',function($scope,$http,$state,$ionicLoading){
  $scope.fromid=localStorage.getItem("userId");
  $ionicLoading.show({template: 'Loading...'});
$http.get('http://times-hitachi.cruxservers.in/api/?method=getUsers&userId='+$scope.fromid)
.then(function(response){
  $ionicLoading.hide();
  $scope.userdata=response.data;
  console.log(response.id)

})
})






.controller('queriesCtrl', function($scope,$http,$window,$ionicLoading,$state,$ionicHistory){

  $scope.sendemail=function(qry){
$ionicLoading.show({template: 'Loading...'});
    $http({
      method:'POST',
      url:'http://times-hitachi.cruxservers.in/api',
      params:{
        method:'sendQuery',
        fullname:qry.fullname,
        useremail:qry.useremail,
        mobile:qry.mobile,
        query_related_to:qry.query_related_to,
        query:qry.query
      }
    }).then(function(response){
      $ionicLoading.hide();
      console.log(response.data);
      $scope.mailresult=response.data;
      alert($scope.mailresult);
     // $ionicHistory.nextViewOptions({disableBack: true});
      // $state.go('app.home',{},{reload: true});
        $window.location.reload(true);
    })
  }
  
})

.controller('contactCtrl', ['$scope', function($scope){
  
}])




.controller('chatCtrl', function($scope,$http, $stateParams, $timeout, $window, $ionicScrollDelegate){
  $scope.hideTime = true;
$scope.toId =$stateParams.id;
$scope.fromid=localStorage.getItem("userId");


  var alternate,
    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

  $scope.sendMessage = function() {

if(!$scope.data.message){
 return false;
}


    alternate = !alternate;

    var d = new Date();
     d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

    $scope.messages.push({
      userId: $scope.toId,
      text: $scope.data.message,
      time: d
    });

    console.log($scope.data.message);


     $http({
      method:'POST',
      url:'http://times-hitachi.cruxservers.in/api/?method=saveMsg&userId='+$scope.fromid+'&to='+$scope.toId+'&msg='+$scope.data.message
     
    }).then(function(response){
console.log(response)
    })




    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);

  };


  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };
  $scope.data = {};
  $scope.myId = $scope.fromid;
  $scope.messages = [];


/*previous chat */
$http.get('http://times-hitachi.cruxservers.in/api/?method=getChatMsgs&from='+$scope.fromid+'&to='+$scope.toId)
.then(function(response){
$scope.prchatdata=response.data;
console.log($scope.prchatdata);
})

$scope.doRefresh = function() {
   // $http.get('http://times-hitachi.cruxservers.in/api/?method=getChatMsgs&from='+$scope.fromid+'&to='+$scope.toId)
   //   .success(function(response) {
   //     $scope.prchatdata=response.data;
   //    console.log($scope.prchatdata);
   //   })
   //   .finally(function() {
   //     // Stop the ion-refresher from spinning
   //     $scope.$broadcast('scroll.refreshComplete');
   //   });
   $window.location.reload(true)
   $ionicScrollDelegate.scrollBottom(true);
   }




$http.get('http://times-hitachi.cruxservers.in/api/?method=getUser&id='+$scope.toId)
.success(function(response){
  $scope.fuser=response.data;
  console.log($scope.fuser);
   $ionicScrollDelegate.scrollBottom(true);
})





})









// .directive('input', function($timeout) {
//   return {
//     restrict: 'E',
//     scope: {
//       'returnClose': '=',
//       'onReturn': '&',
//       'onFocus': '&',
//       'onBlur': '&'
//     },
//     link: function(scope, element, attr) {
//       element.bind('focus', function(e) {
//         if (scope.onFocus) {
//           $timeout(function() {
//             scope.onFocus();
//           });
//         }
//       });
//       element.bind('blur', function(e) {
//         if (scope.onBlur) {
//           $timeout(function() {
//             scope.onBlur();
//           });
//         }
//       });
//       element.bind('keydown', function(e) {
//         if (e.which == 13) {
//           if (scope.returnClose) element[0].blur();
//           if (scope.onReturn) {
//             $timeout(function() {
//               scope.onReturn();
//             });
//           }
//         }
//       });
//     }
//   }
// })

