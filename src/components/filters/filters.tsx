import { filterByDelimiter } from "../../features/filters/filter.features"
import { DelimiterFilterProps } from "../../interfaces/filter.props.interface"

export function DelimiterFilter(props: DelimiterFilterProps) {
  return <button onClick={()=>props.onClick(props.condition)}>
  {/* return <button onClick={()=>props.onClick(props.condition)}> */}
    {props.condition}
  </button>
}

export function SearchFilter() {
  return <div>
    <form action="" method="get">
      <input value="input!!"></input>
    </form>
</div>
} 