import { TableColumn } from "../interfaces/tableColumn";
import { TableTitleListProps } from "../interfaces/tableTitleList.props.interface";
import '../css/common.css';

// export function TableTitleList<T>({dataList, render}: TableTitleListProps<T>) {
//   return <ul>
//     {
//       dataList.map(
//         (data, index) => <li key={index}>{render(data)}</li>
//       )
//     }
//     <li>
//       data.map
//     </li>
//   </ul>
// }
export function TableTitleList({columns}: TableTitleListProps) {
  return <ul>
    {
      columns.map(
        (column)=><li>{column.key}</li>
      )
    }
    <li>
      data.map
    </li>
  </ul>
}