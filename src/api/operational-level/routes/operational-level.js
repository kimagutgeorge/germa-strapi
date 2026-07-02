'use strict';

/**
 * operational-level router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::operational-level.operational-level');
