import { get } from "http";

export interface GuideLineDocs {
  [key:string]: string;
  delimiter: string;
  schoolYear: string;
  schoolName: string;
  title: string;
  fileType: string;
  registerDate: string;
}