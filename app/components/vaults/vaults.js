;(function () {
  angular.module('keepr')
    .component('vaultsComponent', {
      templateUrl: 'app/components/vaults/vaults.html',
      controller: VaultsController
    })

  function VaultsController (Models, AuthService) {
    var vc = this

    vc.addVault = function(vault){
    debugger
     vault.userId = vc.user.uid
     Models.Vaults.create(vault)
     vc.newVault = null
    }

    this.$onInit = function () {

      vc.user = AuthService.getAuth()

      Models.Vaults.findAll({userId: vc.user.uid}).then(function(vaults){
        vc.vaults = vaults
      })
    }
    
  }
}())
