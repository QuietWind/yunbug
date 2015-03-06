angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });


  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalRegister = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  $scope.closeRegister = function() {
    $scope.modalRegister.hide();
  };
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.register = function() {
    $scope.modalRegister.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };


  $scope.doRegister = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeRegister();
    }, 1000);
  };
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('buglist', function($scope) {
  $scope.buglists = [
    { title: '首页图片显示不对', id: 1 },
    { title: '列表页错位', id: 2 },
    { title: '登录验证码总是失败', id: 3 }
  ];
})


.controller('error', function($scope) {
  $scope.errormeg="欢迎使用‘云’bug平台";
})


.controller('main', function($scope) {
  $scope.bugs=[
    {id:0,title:"商品图片大小不一致"},
    {id:1,title:"个人中心有点不对"},
    {id:2,title:"面包屑导航箭头不对"},
    {id:3,title:"登录框IE8错位"}
  ];
})

.controller('center', function($scope) {
  $scope.items=[
    {id:9,title:"头像",value:'./img/cat.jpg'},
    {id:0,title:"用户名",value:"云云ge"},
    {id:1,title:"邮箱",value:"wind@sina.com"},
    {id:2,title:"电话",value:"18215593168"},
    {id:3,title:"github",value:"https://github.com/QuietWind/"},
    {id:4,title:"个人网站",value:"http://www.boyweb.cn"}
  ];
})
.controller('commit', function($scope) {
  
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

