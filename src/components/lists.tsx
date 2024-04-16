import { TableColumn } from "../interfaces/tableColumn";
import { TableTitleListProps } from "../interfaces/tableTitleList.props.interface";
import '../css/common.css';
import { GuideLineDocs } from "../interfaces/types.interface";
import { ListItemProps } from "../interfaces/guideLineDocs.props.interface";

export function TableTitleList({columns}: TableTitleListProps) {
  return <ul className="th_style">
    {
      columns.map(
        (column)=><li>{column.key}</li>
      )
    }
  </ul>
}

export function CustomTableList({dataList}: ListItemProps){
  return <ul className=""> 
    { 
      dataList.map((data, index)=>{
        const keys = Object.keys(data);

        return <li key={index} className="data-item"> {
            keys.map((key)=>
              <p key={key} className="">{data[key]}</p>
            )
          }
        </li>}
      ) 
    }
  </ul>
}