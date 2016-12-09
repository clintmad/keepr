;(function () {
  angular.module('keepr')
    .component('vaultsComponent', {
      templateUrl: 'app/components/vaults/vaults.html',
      controller: VaultsController
    })

  function VaultsController(Models, AuthService) {
   var vc = this

   vc.member = AuthService.getMember()

   vc.addVault = function (newVault) {
     debugger
     newVault.userId = vc.member.id
     vc.member.vaults = vc.member.vaults || []
     vc.member.vaults.push(newVault)
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
