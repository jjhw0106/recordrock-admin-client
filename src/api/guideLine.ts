import { guidelineDocsDataset } from "./database";

export async function getCalendarInfo() {
  const calendarInfo = await fetch('http://localhost:3000/calendars/centers')
    .then((response) => response.json())
    .then((data) => {
      return data;
  });
  return calendarInfo 
}

export function getGuideLineDocsHeader() {
  return guidelineDocsDataset.header;
}

export function getGuideLineDocsData() {
  return guidelineDocsDataset.data;
}

export async function getGuideLineDocsByDelimiter(delimiter: string) {
  return await guidelineDocsDataset.data.filter((document)=>document.delimiter===delimiter);
}