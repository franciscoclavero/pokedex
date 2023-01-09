import styled from "./index.module.css";

const Filter = () => {
  return (
    <div className={styled.body}>
      <div className={styled.filter}>
        <input className={styled.filterInput} placeholder="Filtro" type="text"/>
      </div>
    </div>
  )
};

export default Filter;