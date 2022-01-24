"use strict";

/**
 *  tour controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::tour.tour", ({ strapi }) => ({
  async findOneBySlug(ctx) {
    const { slug } = ctx.params;

    const response = await strapi.db.query("api::tour.tour").findOne({
      where: {
        slug: slug,
      },
    });

    return response;
  },
}));
