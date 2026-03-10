'use strict';

/**
 * steering-wheel router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::steering-wheel.steering-wheel');
