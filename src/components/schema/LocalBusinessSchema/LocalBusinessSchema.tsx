import { LocalBusinessSchemaProps } from "./types";
import { registerSchema } from "../../../lib/schema-registry";

export const LocalBusinessSchema = ({ data }: LocalBusinessSchemaProps) => {
  registerSchema({
    "@type": data["@type"] || "LocalBusiness",
    ...data,
  });

  return null;
};
