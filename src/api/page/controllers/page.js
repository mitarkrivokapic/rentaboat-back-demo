"use strict";

/**
 *  page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findOneBySlug(ctx) {
    const { slug } = ctx.params;

    const response = await strapi.db.query("api::page.page").findOne({
      where: {
        slug: slug,
      },
      populate: {
        hero: { populate: true },
        boats: { populate: { boats: { populate: true } } },
        tours: { populate: { tours: { populate: true } } },
      },
    });

    return response;
  },
}));
