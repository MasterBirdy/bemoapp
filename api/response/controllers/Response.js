'use strict';

/**
 * Response.js controller
 *
 * @description: A set of functions called "actions" for managing `Response`.
 */

module.exports = {

  /**
   * Retrieve response records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.response.search(ctx.query);
    } else {
      return strapi.services.response.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a response record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.response.fetch(ctx.params);
  },

  /**
   * Count response records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.response.count(ctx.query);
  },

  /**
   * Create a/an response record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.response.add(ctx.request.body);
  },

  /**
   * Update a/an response record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.response.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an response record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.response.remove(ctx.params);
  }
};
