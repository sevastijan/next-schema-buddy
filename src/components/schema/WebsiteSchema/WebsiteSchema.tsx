import { WebsiteSchemaProps } from "./types";
import { registerSchema } from "../../../lib/schema-registry";

export const WebsiteSchema = ({ data }: WebsiteSchemaProps) => {
  registerSchema({
    "@type": "WebSite",
    ...data,
  });

  return null;
};
