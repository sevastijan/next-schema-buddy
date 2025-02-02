import { registerSchema } from "../../../lib/schema-registry";
import { ArticleSchemaProps } from "./types";

export const ArticleSchema = ({ data }: ArticleSchemaProps) => {
  registerSchema({
    "@type": data["@type"] || "Article",
    ...data,
  });

  return null;
};
