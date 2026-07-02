'use strict';

/**
 * course-catalogue service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-catalogue.course-catalogue');
