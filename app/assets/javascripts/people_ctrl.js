(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope) {

    $scope.people = [
        {
          name: "Pixie Roger",
          bio: " Roger is tall boy who lives in Rwanda. He has a beautiful girlfriend in Kigali. Mr. Roger likes basketball, eating and swimming.",
          bioVisible:false
        },
        {
          name: "Adolphe Muremera",
          bio: "Adolphe is a blown nigger who lives in Tel Aviv house. He is hometown is Rusizi in Western Province near DRC.",
          bioVisible: false
        },
        {
          name: "Moise Pastor",
          bio: " Pastor is a cool guy who like to talk about bible to his friends. He lives at Palace House which is the worst group house of Kepler",
          bioVisible: false
        }
     ];

     $scope.addPerson = function(name, bio) {
         if (name && bio) {
           var person = {
             name: name,
             bio: bio,
             bioVisible: false
           }
           $scope.people.push(person);
         }
       };


     $scope.showBio = function(person) {
          var index = $scope.people.indexOf(person);
          $scope.people[index].bioVisible = true;
          
       }





    window.$scope = $scope;

  });
})();