import { BaseSchema } from "../../../types";

export interface ContactPointSchema extends BaseSchema {
  "@type": "ContactPoint";
  telephone?: string;
  contactType?: string;
  email?: string;
  areaServed?: string | string[];
  availableLanguage?: string | string[];
}
