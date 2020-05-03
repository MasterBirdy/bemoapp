'use strict';

/**
 * Contactpage.js controller
 *
 * @description: A set of functions called "actions" for managing `Contactpage`.
 */

module.exports = {

  /**
   * Retrieve contactpage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.contactpage.search(ctx.query);
    } else {
      return strapi.services.contactpage.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a contactpage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.contactpage.fetch(ctx.params);
  },

  /**
   * Count contactpage records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.contactpage.count(ctx.query);
  },

  /**
   * Create a/an contactpage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.contactpage.add(ctx.request.body);
  },

  /**
   * Update a/an contactpage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.contactpage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an contactpage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.contactpage.remove(ctx.params);
  }
};
