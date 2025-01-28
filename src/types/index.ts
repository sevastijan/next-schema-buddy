export interface BaseSchema {
  "@context"?: "https://schema.org";
  "@type": string;
  "@id"?: string;
}

export interface UseSchemaOptions {
  id?: string;
  space?: number;
}
