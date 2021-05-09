module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: "http://localhost:1337",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '792e007ce3ca18f88f3d31e10a146194'),
    },
  },
});
