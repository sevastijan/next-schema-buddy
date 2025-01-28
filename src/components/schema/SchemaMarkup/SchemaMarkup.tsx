import Script from "next/script";
import {
  getRegisteredSchemas,
  getRegistryConfig,
} from "../../../lib/schema-registry";

export const SchemaMarkup = () => {
  const schemas = getRegisteredSchemas();
  const options = getRegistryConfig();

  if (!schemas) {
    return null;
  }

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas, null, options.indentation),
      }}
    />
  );
};
