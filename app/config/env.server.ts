export function validateEnv() {
  if (process.env.NODE_ENV === 'production') {
    const requiredEnvVars = [
      'SESSION_SECRET',
      'STRIPE_PUBLIC_KEY',
      'STRIPE_SECRET_KEY',
      'STRIPE_WEBHOOK_SECRET',
    ];

    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        throw new Error(`${envVar} must be set in production`);
      }
    }
  }
}

export function getEnv() {
  return {
    NODE_ENV: process.env.NODE_ENV,
    SESSION_SECRET: process.env.SESSION_SECRET,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  };
} 