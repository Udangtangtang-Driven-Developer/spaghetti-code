import { ZodObject, ZodRawShape } from 'zod';

export const validateEnvironment =
  <T extends ZodObject<ZodRawShape>>(schema: T) =>
  (env: Record<string, string>) =>
    schema.parse(env);
