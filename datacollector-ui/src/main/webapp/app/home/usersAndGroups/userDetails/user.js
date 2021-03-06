/*
 * Copyright 2020 StreamSets Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Controller for modal to insert/edit a user.
 */

angular
  .module('dataCollectorApp.home')
  .controller('UserModalController', function ($scope, $modalInstance, user, isNew, api, groupsList) {
    angular.extend($scope, {
      operationInProgress: false,
      groupsList: groupsList,
      isNew: isNew,
      userModel: {
        groups: ['all']
      },

      init: function() {
        if(isNew) {
          $scope.modalTitle = 'Create User';
        } else {
          $scope.modalTitle = 'Edit User';
          // - set user model
          $scope.userModel.id = user.id;
          $scope.userModel.email = user.email;
          $scope.userModel.groups = user.groups;
          user.roles.forEach(function(role) {
            $scope.userModel[role] = user.roles.includes(role);
          });
        }
      },

      save: function() {
        var allRoles = [ 'admin', 'manager', 'creator', 'guest'];
        $scope.operationInProgress = true;

        // - make user object for API from user model
        var myUser = {
          id: $scope.userModel.id,
          email: $scope.userModel.email,
          groups: $scope.userModel.groups,
          roles: [],
        };
        allRoles.forEach(function(role) {
          if($scope.userModel[role]) {
            myUser.roles.push(role);
          }
        });

        // - REST call to insert or update the user
        api.admin[isNew ? 'insertUser' : 'updateUser'](myUser)
          .then(function() {
            $modalInstance.close(myUser);
          })
          .catch(function(res) {
            $scope.operationInProgress = false;
            $scope.common.errors = res.data ? [res.data] : [res.status + ' - ' + res.statusText];
          });
      },

      cancel: function() {
        $modalInstance.dismiss('cancel');
      },

    });

    $scope.init();

  });
