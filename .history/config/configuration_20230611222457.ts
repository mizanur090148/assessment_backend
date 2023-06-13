export default () => {
  return {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiPort: parseInt(process.env.API_SERVER_PORT, 10) || 5000,
    database: {
      host: process.env.DATABASE_URL || 'mongodb://localhost/assessments',
      port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
    },
    mailConfig: {
      host: process.env.MAIL_HOST || '',
      port: process.env.MAIL_PORT || '587',
      user: process.env.MAIL_USER || '',
      password: process.env.MAIL_PASSWORD || '',
      from: process.env.MAIL_FROM || '',
    },
    otpConfig: {
      user: process.env.INFOBIP_USER_ID || '',
      password: process.env.INFOBIP_PASS || '',
      from: process.env.INFOBIP_FROM || '',
      countryCode: process.env.COUNTRY_CODE || '',
    },
    awsConfig: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
      bucketName: process.env.AWS_S3_BUCKET || '',
      region: process.env.AWS_S3_REGION || '',
    },
  };
};
