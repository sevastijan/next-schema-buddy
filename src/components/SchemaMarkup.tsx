import { JSX } from "react";
import Script from "next/script";
import type { SchemaType, BaseSchema, UseSchemaOptions } from "../types";

export const SchemaMarkup = (
  type: SchemaType,
  data: Record<string, any>,
  options?: UseSchemaOptions
): JSX.Element => {
  const schema = () => {
    const schemaData: BaseSchema = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    };
    return JSON.stringify(schemaData, null, options?.space);
  };

  return (
    <Script
      id={options?.id ?? `schema-${type}`}
      type="application/ld+json"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{ __html: schema }}
    />
  );
};
