module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '06ac66d909e0349bf851fcc0858f789c'),
  },
});
