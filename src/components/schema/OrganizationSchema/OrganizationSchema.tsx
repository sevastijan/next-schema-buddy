import { registerSchema } from "../../../lib/schema-registry";
import { OrganizationSchemaProps } from "./types";

export const OrganizationSchema = ({ data }: OrganizationSchemaProps) => {
  registerSchema({
    "@type": "Organization",
    ...data,
  });

  return null;
};
