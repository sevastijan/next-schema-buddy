import { BaseSchema } from "../../../types";

export interface EntryPointSchema extends BaseSchema {
  "@type": "EntryPoint";
  urlTemplate: string;
}
