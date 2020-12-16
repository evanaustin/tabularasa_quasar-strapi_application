module.exports = () => ({
  settings: {
    cors: {
      enabled: true,
      origin: [process.env.ADMIN_HOST, process.env.CLIENT_HOST],
    },
  },
});
