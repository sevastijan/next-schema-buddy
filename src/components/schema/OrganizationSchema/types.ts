import { BaseSchema } from "../../../types";
import { ContactPointSchema } from "../ContactPointSchema/types";
import { ImageObjectSchema } from "../ImageObjectSchema/types";
import { PostalAddressSchema } from "../PostalAddressSchema/types";

export interface OrganizationSchema extends BaseSchema {
  "@type": "Organization";
  name: string;
  url: string;
  logo?: ImageObjectSchema;
  description?: string;
  sameAs?: string[];
  address?: PostalAddressSchema;
  contactPoint?: ContactPointSchema;
}

export interface OrganizationSchemaProps {
  data: Omit<OrganizationSchema, "@context" | "@type">;
}
