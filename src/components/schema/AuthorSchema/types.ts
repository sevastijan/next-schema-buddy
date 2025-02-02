import { BaseSchema } from "../../../types";

export interface AuthorSchema extends BaseSchema {
  "@type": "Person" | "Organization";
  name: string;
  url?: string;
  image?: string;
}
