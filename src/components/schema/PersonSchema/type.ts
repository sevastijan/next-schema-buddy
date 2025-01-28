import { BaseSchema } from "../../../types";

export interface PersonSchema extends BaseSchema {
  "@type": "Person";
  name: string;
}
