module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fdf1887f9d87ae8e0346099bd8a52e7e'),
  },
});
