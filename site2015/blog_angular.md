angualr的应用有一定的成效，但是还是不够的，现在开始要进行下一步的计划l
首先说一下，为什么有下面这些写法：
fucntion PhoneCtrl($scope,$http){
    $http.get('phone.json').success(function(data){
        $scope.phones=data;
    });
};
js压缩的时候会压缩参数，有可能影响依赖注入系统，所以需要做一些方法来解决

比如：
PhoneCtrl.$inject = ['$scope','http'];

var PhoneCtrl=['$scope','$http',function($scope,$http){}];


ng-src是用来避免浏览器产生一个非法地址的请求
