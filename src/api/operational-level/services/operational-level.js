'use strict';

/**
 * operational-level service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::operational-level.operational-level');
