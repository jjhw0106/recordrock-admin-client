import { TableTitleListProps } from "interfaces/tableTitleList.props.interface";

export function TableListHeader({columns}: TableTitleListProps) {
  return <div className="list_type typeList title-list-container">
    <ul className="th_style">
      {
        columns.map(
          (column)=><li>{column.key}</li>
        )
      }
    </ul>
  </div>
}

export default TableListHeader;