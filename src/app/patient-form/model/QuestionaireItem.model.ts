import { Options } from "./Options.model";

export interface QuestionaireItem {
     linkId: string;
     text: string;
     type: string;
     option: Options[];
     selectedValue: string[];
}