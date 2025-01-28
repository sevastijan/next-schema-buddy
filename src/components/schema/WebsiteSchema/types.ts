import { BaseSchema } from "../../../types";
import { OrganizationSchema } from "../OrganizationSchema/types";
import { SearchActionSchema } from "../SearchActionSchema/types";

export interface WebsiteSchema extends BaseSchema {
  "@type": "WebSite";
  name: string;
  url: string;
  description?: string;
  image?: string;
  publisher?: OrganizationSchema;
  potentialAction?: SearchActionSchema | SearchActionSchema[];
  sameAs?: string[];
}

export interface WebsiteSchemaProps {
  data: Omit<WebsiteSchema, "@context" | "@type">;
}
