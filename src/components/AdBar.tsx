import styled from "styled-components";
function AdBar() {
  return <AdBarStyled></AdBarStyled>;
}

export default AdBar;

const AdBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
`;
