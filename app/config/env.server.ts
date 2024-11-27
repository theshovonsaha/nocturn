export function validateEnv() {
  if (context.env.NODE_ENV === 'production') {
    const requiredEnvVars = [
      'SESSION_SECRET',
      'STRIPE_PUBLIC_KEY',
      'STRIPE_SECRET_KEY',
      'STRIPE_WEBHOOK_SECRET',
    ];

    for (const envVar of requiredEnvVars) {
      if (!context.env[envVar]) {
        throw new Error(`${envVar} must be set in production`);
      }
    }
  }
}

export function getEnv() {
  return {
    NODE_ENV: context.env.NODE_ENV,
    SESSION_SECRET: context.env.SESSION_SECRET,
    STRIPE_PUBLIC_KEY: context.env.STRIPE_PUBLIC_KEY,
    STRIPE_SECRET_KEY: context.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: context.env.STRIPE_WEBHOOK_SECRET,
  };
} 