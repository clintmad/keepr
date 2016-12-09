; (function () {
  angular.module('keepr')
    .component('myKeepsComponent', {
      templateUrl: 'app/components/my-keeps/my-keeps.html',
      controller: MyKeepsController
    })

  function MyKeepsController(Models, AuthService) {
    var mkc = this

    // If you have the authenticated member how can you use the Models.Keeps to filter only
    // the keeps that the user created?

    mkc.addKeep = function (keep) {
      keep.userId = mkc.user.uid
      keep.viewCount = 0
      keep.shareCount = 0
      keep.keepCount = 0
      Models.Keeps.create(keep)
      mkc.newKeep = null
    }

    this.$onInit = function () {

      mkc.user = AuthService.getAuth()

      Models.Keeps.findAll({ userId: mkc.user.uid }).then(function (myKeeps) {
        mkc.myKeeps = myKeeps
      })
    }

    mkc.onKeepClick = function (myKeep) {
      myKeep.keepCount++
    }

    mkc.onShareClick = function (myKeep) {
      myKeep.shareCount++
    }

    mkc.onLinkClick = function (myKeep) {
      myKeep.viewCount++
    }


  }
} ())
