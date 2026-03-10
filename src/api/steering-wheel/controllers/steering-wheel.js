'use strict';

/**
 * steering-wheel controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::steering-wheel.steering-wheel');
