import { cache } from "react";

export interface SchemaRegistryOptions {
  indentation?: number;
}

interface SchemaRegistryStoreOptions {
  initialSchemas?: Record<string, any>[];
  initialConfig?: SchemaRegistryOptions;
}

class SchemaRegistryStore {
  private static instance: SchemaRegistryStore | null = null;
  private readonly schemas: Record<string, any>[];
  private config: SchemaRegistryOptions;

  private constructor(options?: SchemaRegistryStoreOptions) {
    this.schemas = options?.initialSchemas ?? [];
    this.config = options?.initialConfig ?? {};
  }

  static getInstance(
    options?: SchemaRegistryStoreOptions
  ): SchemaRegistryStore {
    if (!SchemaRegistryStore.instance) {
      SchemaRegistryStore.instance = new SchemaRegistryStore(options);
    }
    return SchemaRegistryStore.instance;
  }

  addSchema(schema: Record<string, any>): void {
    this.schemas.push({
      "@context": "https://schema.org",
      ...schema,
    });
  }

  setConfig(config: SchemaRegistryOptions): void {
    this.config = config;
  }

  getSchemas() {
    if (this.schemas.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@graph": this.schemas.map((schema) => {
        const { "@context": _context, ...schemaData } = schema;
        return schemaData;
      }),
    };
  }

  getConfig(): SchemaRegistryOptions {
    return this.config;
  }

  reset(): void {
    this.schemas.length = 0;
    this.config = {};
  }
}

const registry = SchemaRegistryStore.getInstance();

export const registerSchema = cache((schema: Record<string, any>) => {
  registry.addSchema(schema);
});

export const configureRegistry = cache((config: SchemaRegistryOptions) => {
  registry.setConfig(config);
});

export const getRegisteredSchemas = cache(() => registry.getSchemas());

export const getRegistryConfig = cache(() => registry.getConfig());

export const resetRegistry = () => registry.reset();
