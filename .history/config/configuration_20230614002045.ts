export default () => {
  return {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiPort: parseInt(process.env.API_SERVER_PORT, 10) || 5000,
    database: {
      host: process.env.DATABASE_URL || 'mongodb://localhost/assessments',
      port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
    },
  };
};
