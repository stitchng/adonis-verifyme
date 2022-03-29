'use strict'

/*
 * adonis-verifyme
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const test = require('japa')
const { Config, Logger } = require('@adonisjs/sink')
const { ioc } = require('@adonisjs/fold')

const VerifyMeProvider = require('../providers/VerifyMeProvider.js')
const VerifyMe = require('../src/VerifyMe/index.js')

test.group('AdonisJS VerifyMe Test(s)', (group) => {
  group.before(() => {
    ioc.singleton('Adonis/Src/Config', () => {
      let config = new Config()
      config.set('verifyme.liveAPiKey', 'xxxxxx')
      config.set('verifyme.testApiKey', 'yyyyyy')
      return config
    })

    ioc.singleton('Logger', () => {
      return new Logger()
    })
  })

  test('verifyme provider instance registers instance(s) as expected', async (assert) => {
    let provider = new VerifyProvider(ioc)
    provider.register()

    // assert.isInstanceOf(VerifyMe)
  })
})
