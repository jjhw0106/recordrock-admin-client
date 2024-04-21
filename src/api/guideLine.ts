import { guidelineDocsData } from "./database";

export async function getCalendarInfo() {
  const calendarInfo = await fetch('http://localhost:3000/calendars/centers')
    .then((response) => response.json())
    .then((data) => {
      return data;
  });
  return calendarInfo 
}

export function getGuideLineDocs() {
  return guidelineDocsData;
}

export async function getGuideLineDocsByDelimiter(delimiter: string) {
  return await guidelineDocsData.filter((document)=>document.delimiter===delimiter);
}