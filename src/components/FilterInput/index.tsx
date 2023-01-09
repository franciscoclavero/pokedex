import { ChangeEventHandler } from "react";
import styled from "./index.module.css";

interface InterfaceFilter {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

const Filter = ({ value, onChange }: InterfaceFilter) => {
  return (
    <div className={styled.body}>
      <div className={styled.filter}>
        <input value={value} onChange={onChange} className={styled.filterInput} placeholder="Filtro" type="search"/>
      </div>
    </div>
  )
};

export default Filter;