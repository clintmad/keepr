angular.module('keepr')
	.service('Models', function (DS) {

		//A user Resource already exist please see the auth-component.js file

		this.Keeps = DS.defineResource({
			name: 'keep',
			endpoint: 'keeps',
			relations: {
				belongsTo: {
					user: {
						localField: 'author',
						localKey: 'userId'
					},
					vault: {
						localField: 'vaults',
						localKey: 'userId'
					}
				}
			}
		})

		this.Vaults = DS.defineResource({
			name: 'vault',
			endpoint: 'vaults',
			relations: {
				belongsTo: {
					member: {
						localField: 'author',
						localKey: 'userId'
					}
				},
				hasMany: {
					keep: {
						localField: 'keeps',
						localKey: 'userId'
					}
				}
			}
		})

	})
