import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as filterComponents from './components/filters/filters';
import { getGuideLineDocs } from './api/guideLine';
import { GuideLineDocs } from './interfaces/types.interface';
import './css/common.css';
// import { CustomTableList, TableTitleList } from './components/lists/lists';
import { TableColumn } from './interfaces/tableColumn';
import { Clock } from './components/soaple_lecture/clock/Clock';
import { filterByDelimiter } from './features/filters/filter.features';
import { TableListContainer } from 'components/lists/listContainer/tableListContainer';

function App() {
  // const [calendarInfo, setCalendarInfo] = useState([]);
  const [guidelineDocs, setGuidelineDocs] = useState<GuideLineDocs[]>([]);
  useEffect(() => {
    const data: GuideLineDocs[] = getGuideLineDocs();
    setGuidelineDocs(data); 
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행됨
  
  const handleFilterClick = async (condition: string) => {
    const filteredData = await filterByDelimiter(condition); // 조건에 맞는 데이터 필터링
    setGuidelineDocs(filteredData);  // 필터링된 데이터로 상태 업데이트
  };

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
        <Clock></Clock>
      </header>
      <body>
        <div className=''>
          <filterComponents.DelimiterFilter condition={"4년제"} onClick={async (condition)=>await handleFilterClick(condition)}></filterComponents.DelimiterFilter>
          <filterComponents.DelimiterFilter condition={"2년제"} onClick={async (condition)=>await handleFilterClick(condition)}></filterComponents.DelimiterFilter>
          <filterComponents.SearchFilter></filterComponents.SearchFilter>
          <TableListContainer header={columns} dataList={guidelineDocs}></TableListContainer>
        </div>
      </body>
    </div>
  );
}

export default App;