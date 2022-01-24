module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '87eb2eaef393887efca36ccad148bcaa'),
  },
});
