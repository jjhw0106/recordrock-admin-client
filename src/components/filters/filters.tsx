import { useState } from "react"
import { filterByDelimiter } from "../../features/filters/filter.features"
import { DelimiterFilterProps } from "../../interfaces/filter.props.interface"

export function DelimiterFilter(props: DelimiterFilterProps) {

  const handleClick = () => {
    props.onClick(props.condition, !props.isActive);
  }
  return <button onClick={handleClick} className={props.isActive ? 'active':''} >
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

