import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as filterComponents from './components/filters';
import { getGuideLineDocs } from './api/guideLine';
import { GuideLineDocs } from './interfaces/types.interface';
import './css/common.css';
import { CustomTableList, TableTitleList } from './components/lists';
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
          <filterComponents.DelimiterFilter condition={"4년제"} onClick={(condition)=>console.log(`clicked!!${condition}`)}></filterComponents.DelimiterFilter>
          <filterComponents.DelimiterFilter condition={"2년제"} onClick={(condition)=>console.log(`clicked!!${condition}`)}></filterComponents.DelimiterFilter>
          <filterComponents.SearchFilter></filterComponents.SearchFilter>
          <div className='list_type typeList'>
            <div className="title-list-container">
              <TableTitleList columns={columns}></TableTitleList>
            </div>
            <div className="data-list-container">
              <CustomTableList dataList={guidelineDocs}></CustomTableList>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;