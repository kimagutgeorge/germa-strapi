'use strict';

/**
 * operational-level controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::operational-level.operational-level');
