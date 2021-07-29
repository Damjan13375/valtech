import styled from "styled-components";

const Header = styled.header`
  min-height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  width: 100%;
  position:fixed;
  top: 0;
  z-index: 50
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
  align-items: ${(props) => (props.align ? props.align : "center")};
  width: ${(props) => (props.width ? props.width : "auto")};
  z-index: 2;
`;

const FlexColumn = styled(FlexRow)`
  flex-direction: column;
`;
const SearchInput = () => {
  const Input = styled.input`
    width: 270px;
    height: 39px;
    border: 1px solid #195757;
    border-radius: 15px 0px 0px 15px;
    text-indent: 16px
  `;
  const Button = styled.button`
    width: 70px;
    height: 43px;
    background: #00e0ff 0% 0% no-repeat padding-box;
    border: none;
    padding: 13px 11px 12px;
    font-size:12px;
    margin-left: -4px;
   `;
  return (
    <>
      
      <Input placeholder="Type text here..." /> <Button>SEARCH </Button>
    </>
  );
};
const Link = styled.a`
  text-decoration: none;
  color: #707070;
`;
export { Header, FlexColumn, FlexRow, SearchInput,Link };
