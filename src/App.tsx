import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as filterComponents from './components/filters';
import { getGuideLineDocs } from './api/guideLine';
import { GuideLineDocs } from './interfaces/types.interface';
import './css/common.css';
import { TableTitleList } from './components/lists';
import { TableColumn } from './interfaces/tableColumn';

function App() {
  // const [calendarInfo, setCalendarInfo] = useState([]);
  const [guidelineDocs, setGuidelineDocs] = useState<GuideLineDocs[]>([]);
  useEffect(() => {
      const data: GuideLineDocs[] = getGuideLineDocs();
      setGuidelineDocs(data); 
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행됨

  const columns: TableColumn[] = [
    { key: 'delimiter', label: 'Delimiter' },
    { key: 'schoolYear', label: 'School Year' },
    { key: 'schoolName', label: 'School Name' },
    { key: 'title', label: 'Title' },
    { key: 'fileType', label: 'File Type' },
    { key: 'registerDate', label: 'Register Date' },
  ]

  return (
    <div>
      <header>
        <p>헤더</p>
      </header>
      <body>
        <div className=''>
          <filterComponents.DelimiterFilter></filterComponents.DelimiterFilter>
          <filterComponents.DelimiterFilter></filterComponents.DelimiterFilter>
          <filterComponents.SearchFilter></filterComponents.SearchFilter>
          <TableTitleList columns={columns}></TableTitleList>
          <ul>

          </ul>
          
          {/* <table className='custom-table'>
            <thead>
              <tr className='.custom-table tbody tr:hover '>
                <th>Delimiter</th>
                <th>School Year</th>
                <th>School Name</th>
                <th>Title</th>
                <th>File Type</th>
                <th>Register Date</th>
              </tr>
            </thead>
            <tbody>
              {guidelineDocs.map((doc, index) => (
                <tr key={index}>
                  <td>{doc.delimiter}</td>
                  <td>{doc.schoolYear}</td>
                  <td>{doc.schoolName}</td>
                  <td>{doc.title}</td>
                  <td>{doc.fileType}</td>
                  <td>{doc.registerDate}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </body>
    </div>
  );
}

export default App;