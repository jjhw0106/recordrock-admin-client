import { Children } from "react";
import { TableListHeader } from "../listHeader/tableListHeader";
import TableListData from "../listData/tableListData";
import { TableColumn } from "interfaces/tableColumn";
import { GuideLineDocs } from "interfaces/types.interface";
import { TableTitleListProps } from "interfaces/tableTitleList.props.interface";
import { ListItemProps } from "interfaces/guideLineDocs.props.interface";


export interface TableListProps {
  header: TableColumn[];
  dataList: GuideLineDocs[];
}

export function TableListContainer(props: TableListProps){
  return (<div>
    <TableListHeader columns={props.header}></TableListHeader>
    <TableListData dataList={props.dataList}></TableListData>
  </div>
  );
}