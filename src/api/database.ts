import { TableColumn } from "interfaces/tableColumn"
import { GuideLineDocs } from "interfaces/types.interface"

export interface GuideLineDataset {
  header: TableColumn[],
  data: GuideLineDocs[]
}

export const guidelineDocsDataset: GuideLineDataset = {
  header: [
    { key: 'delimiter', label: 'Delimiter' },
    { key: 'schoolYear', label: 'School Year' },
    { key: 'schoolName', label: 'School Name' },
    { key: 'title', label: 'Title' },
    { key: 'fileType', label: 'File Type' },
    { key: 'registerDate', label: 'Register Date' }
  ],
  data: [
    {delimiter: '4년제', schoolYear: '2025년도', schoolName: '목표대학교', title: '대입전형 시행계획', fileType: '한글', registerDate: '2024.02.22'},
    {delimiter: '4년제', schoolYear: '2026년도', schoolName: '미래대학교', title: '신입생 모집 요강', fileType: 'PDF', registerDate: '2024.03.05'},
    {delimiter: '2년제', schoolYear: '2025년도', schoolName: '혁신전문대학', title: '2025 신입생 선발 안내', fileType: '한글', registerDate: '2024.01.18'},
    {delimiter: '4년제', schoolYear: '2025년도', schoolName: '창조대학교', title: '입학 전형안내', fileType: 'PDF', registerDate: '2024.02.10'},
    {delimiter: '4년제', schoolYear: '2025년도', schoolName: '희망대학교', title: '대학 입시 요강', fileType: '한글', registerDate: '2024.04.01'},
    {delimiter: '4년제', schoolYear: '2026년도', schoolName: '꿈꾸는대학교', title: '2026학년도 신입생 모집 계획', fileType: 'PDF', registerDate: '2024.05.16'},
    {delimiter: '4년제', schoolYear: '2025년도', schoolName: '성공대학교', title: '신입생 입학정보', fileType: '한글', registerDate: '2024.03.25'},
    {delimiter: '2년제', schoolYear: '2026년도', schoolName: '실용전문대학', title: '2026 입학안내 및 전형계획', fileType: 'PDF', registerDate: '2024.02.15'},
    {delimiter: '4년제', schoolYear: '2025년도', schoolName: '지식대학교', title: '입학 전형 안내서', fileType: '한글', registerDate: '2024.01.30'},
    {delimiter: '4년제', schoolYear: '2026년도', schoolName: '개척대학교', title: '신입학 전형 가이드라인', fileType: 'PDF', registerDate: '2024.03.20'}
  ]
}

// export const guidelineDocsData = [
//   {delimiter: '4년제', schoolYear: '2025년도', schoolName: '목표대학교', title: '대입전형 시행계획', fileType: '한글', registerDate: '2024.02.22'},
//   {delimiter: '4년제', schoolYear: '2026년도', schoolName: '미래대학교', title: '신입생 모집 요강', fileType: 'PDF', registerDate: '2024.03.05'},
//   {delimiter: '2년제', schoolYear: '2025년도', schoolName: '혁신전문대학', title: '2025 신입생 선발 안내', fileType: '한글', registerDate: '2024.01.18'},
//   {delimiter: '4년제', schoolYear: '2025년도', schoolName: '창조대학교', title: '입학 전형안내', fileType: 'PDF', registerDate: '2024.02.10'},
//   {delimiter: '4년제', schoolYear: '2025년도', schoolName: '희망대학교', title: '대학 입시 요강', fileType: '한글', registerDate: '2024.04.01'},
//   {delimiter: '4년제', schoolYear: '2026년도', schoolName: '꿈꾸는대학교', title: '2026학년도 신입생 모집 계획', fileType: 'PDF', registerDate: '2024.05.16'},
//   {delimiter: '4년제', schoolYear: '2025년도', schoolName: '성공대학교', title: '신입생 입학정보', fileType: '한글', registerDate: '2024.03.25'},
//   {delimiter: '2년제', schoolYear: '2026년도', schoolName: '실용전문대학', title: '2026 입학안내 및 전형계획', fileType: 'PDF', registerDate: '2024.02.15'},
//   {delimiter: '4년제', schoolYear: '2025년도', schoolName: '지식대학교', title: '입학 전형 안내서', fileType: '한글', registerDate: '2024.01.30'},
//   {delimiter: '4년제', schoolYear: '2026년도', schoolName: '개척대학교', title: '신입학 전형 가이드라인', fileType: 'PDF', registerDate: '2024.03.20'}
// ]

// export const columns: TableColumn[] = [
//   { key: 'delimiter', label: 'Delimiter' },
//   { key: 'schoolYear', label: 'School Year' },
//   { key: 'schoolName', label: 'School Name' },
//   { key: 'title', label: 'Title' },
//   { key: 'fileType', label: 'File Type' },
//   { key: 'registerDate', label: 'Register Date' },
// ]
