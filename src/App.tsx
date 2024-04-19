import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as filterComponents from './components/filters/filters';
import { getGuideLineDocs } from './api/guideLine';
import { GuideLineDocs } from './interfaces/types.interface';
import './css/common.css';
import { CustomTableList, TableTitleList } from './components/lists/lists';
import { TableColumn } from './interfaces/tableColumn';
import { Clock } from './components/soaple_lecture/clock/Clock';
import { filterByDelimiter } from './features/filters/filter.features';
import Accomodate from './components/soaple_lecture/counter/Accomodate';
import Calculator from './components/soaple_lecture/temperature/Calculator';
import ClassConfirmButton from './components/soaple_lecture/confirm/ClassConfirmButton';
import FunctionConfirmButton from './components/soaple_lecture/confirm/FunctionConfirmButton';
import Toolbar from './components/soaple_lecture/toolbar/Toolbar';
import LandingPage from './components/soaple_lecture/toolbar/LandingPage';
import ProfileCard from './components/soaple_lecture/composition/ProfileCard';
import MainContent from 'context/MainContent';
import DarkOrLight from 'context/DarkOrLight';

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
        {/* <Clock></Clock> */}
        <ProfileCard></ProfileCard>
        <Calculator></Calculator>
        <ClassConfirmButton></ClassConfirmButton>
        <FunctionConfirmButton></FunctionConfirmButton>
        <LandingPage></LandingPage>
        <DarkOrLight></DarkOrLight>
      </header>
      <body>
        <div className=''>
          <filterComponents.DelimiterFilter condition={"4년제"} onClick={(condition)=>filterByDelimiter(condition)}></filterComponents.DelimiterFilter>
          <filterComponents.DelimiterFilter condition={"2년제"} onClick={(condition)=>filterByDelimiter(condition)}></filterComponents.DelimiterFilter>
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