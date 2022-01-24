module.exports = {
  routes: [
    {
      method: "GET",
      path: "/tour/:slug",
      handler: "tour.findOneBySlug",
    },
  ],
};
