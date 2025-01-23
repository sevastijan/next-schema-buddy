export type SchemaType =
  | "Product"
  | "Article"
  | "Organization"
  | "Person"
  | "LocalBusiness"
  | "WebSite"
  | "WebPage"
  | "BreadcrumbList"
  | string;

export interface BaseSchema {
  "@context": "https://schema.org";
  "@type": SchemaType;
  [key: string]: any;
}

export interface UseSchemaOptions {
  id?: string;
  space?: number;
}
