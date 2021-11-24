module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/learn",
        permanent: true,
      },
    ];
  },
};
