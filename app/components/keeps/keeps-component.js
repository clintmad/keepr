; (function () {
  angular.module('keepr')
    .component('keepsComponent', {
      templateUrl: 'app/components/keeps/keeps.html',
      controller: KeepsController
    })


  function KeepsController(Models) {
    var kc = this

    Models.Keeps.findAll({}).then(function (keeps) {
      kc.keeps = keeps
    })

    kc.onKeepClick = function (keep) {
      keep.keepCount++
    }

    kc.onShareClick = function (keep) {
      keep.shareCount++
    }

    kc.onLinkClick = function (keep) {
      keep.viewCount++
    }

  }
} ())
