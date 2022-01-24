module.exports = {
  routes: [
    {
      method: "GET",
      path: "/boat/:slug",
      handler: "boat.findOneBySlug",
    },
  ],
};
