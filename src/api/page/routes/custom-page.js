module.exports = {
  routes: [
    {
      method: "GET",
      path: "/page/:slug",
      handler: "page.findOneBySlug",
    },
  ],
};
