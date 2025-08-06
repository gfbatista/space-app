import styled from "styled-components";
import ItemNav from "./ItemNav";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <StyledList>
          <ItemNav
            activeIcon="/icons/home-ativo.png"
            inactiveIcon="/icons/home-inativo.png"
            active
          >
            Início
          </ItemNav>
        </StyledList>
      </nav>
    </aside>
  );
};

export default Sidebar;
