'use strict'

/**
 * adonis-verifyme
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 *
 * @extended Oparand - Ifeora Okechukwu <isocroft@gmail.com>
 */

const path = require('path')

module.exports = async function (cli) {
  try {
    await cli.makeConfig('verifyme.js', path.join(__dirname, './config/verifyme.js'))
    cli.command.completed('create', 'config/verifyme.js')
  } catch (error) {
    // ignore if verifyme.js file already exists
  }
}
