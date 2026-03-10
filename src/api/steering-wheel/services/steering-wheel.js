'use strict';

/**
 * steering-wheel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::steering-wheel.steering-wheel');
