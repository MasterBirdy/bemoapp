'use strict';

/**
 * Analytics.js controller
 *
 * @description: A set of functions called "actions" for managing `Analytics`.
 */

module.exports = {

  /**
   * Retrieve analytics records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.analytics.search(ctx.query);
    } else {
      return strapi.services.analytics.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a analytics record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.analytics.fetch(ctx.params);
  },

  /**
   * Count analytics records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.analytics.count(ctx.query);
  },

  /**
   * Create a/an analytics record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.analytics.add(ctx.request.body);
  },

  /**
   * Update a/an analytics record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.analytics.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an analytics record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.analytics.remove(ctx.params);
  }
};
