import { ListItemProps } from "interfaces/guideLineDocs.props.interface";

function TableListData({dataList}: ListItemProps){
  return <div className="data-list-container">
      <ul className=""> 
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
  </div>
}

export default TableListData;