import React, { useEffect, useState } from 'react';
import './App.css';
import { getGuideLineDocsData, getGuideLineDocsHeader } from './api/guideLine';
import { GuideLineDocs } from './interfaces/types.interface';
import './css/common.css';
import { TableColumn } from './interfaces/tableColumn';
import { Clock } from './components/soaple_lecture/clock/Clock';
import { filterByDelimiter } from './features/filters/filter.features';
import { TableListContainer } from 'components/lists/listContainer/tableListContainer';
import { DelimiterFilter, SearchFilter } from './components/filters/filters';
import FilterWrapper from 'components/filters/filterWrapper';
import { delimiter } from 'constants/constants';
import { GuideLineDataset } from 'api/database';

function App() {
  const [guidelineDocs, setGuidelineDocs] = useState<GuideLineDocs[]>([]);
  const [activeCondition, setActiveCondition] = useState("");
  const header: TableColumn[] = getGuideLineDocsHeader();

  useEffect(() => {
    const data: GuideLineDocs[] = getGuideLineDocsData();
    setGuidelineDocs(data); 
  }, [activeCondition]); // 컴포넌트가 마운트될 때 한 번만 실행됨
  

  // 데이터가 App에 있기 때문에 아래 메소드가 feature로 빠지지 못하고 여기에 구현되었다.
  // 데이터를 param으로 계속 전달하는 것을 지양하기위해, => 이는 상태관리 프레임워크를 사용하면 뺄 수 있을 듯 하다
  const handleFilterClick = async (condition: string) => {
    if(condition === activeCondition) {
      setActiveCondition(delimiter.entire);
      const entireData = getGuideLineDocsData();
      setGuidelineDocs(entireData);
    } else {
      setActiveCondition(condition);
      const filteredData = await filterByDelimiter(condition);
      setGuidelineDocs(filteredData);
    }
  };

  return (
    <div>
      <header>
        <Clock></Clock>
      </header>
      <body>
        <div className=''>
          <FilterWrapper>
            <DelimiterFilter condition={delimiter.y4Univ} isActive={delimiter.y4Univ === activeCondition} onClick={handleFilterClick}></DelimiterFilter>
            <DelimiterFilter condition={delimiter.y2Univ} isActive={delimiter.y2Univ === activeCondition} onClick={handleFilterClick}></DelimiterFilter>
          </FilterWrapper>
          <SearchFilter></SearchFilter>
          <TableListContainer header={header} dataList={guidelineDocs}></TableListContainer>
        </div>
      </body>
    </div>
  );
}

export default App;