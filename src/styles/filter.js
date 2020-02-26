import styled from "styled-components";

export default styled.div`
  text-align: end;
  margin-right: 8px;
  display: flex;
  flex-direction: row;
  color: #155be4;
  font-weight: 900;
  align-items: center;
  justify-content: flex-end;
  .btn-drop,
  .dropdown-menu {
    padding: 8px;
    width: 300px;
    border-radius: 12px;
    background-color: white;
    border: 1px solid #e4e4e4;
    outline: 0px;
    cursor: pointer;
    color: #151515;
    font-size: 15px;
    text-align: initial;
    font-weight: bold;
  }

  .dropdown-menu {
    padding: 0px;
    .dropdown-item {
      padding: 7px;

      &:hover,
      &:active {
        color: #007bff;
        background: white;
      }
    }
  }
  .btn-drop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left:8px;
  }
`;
