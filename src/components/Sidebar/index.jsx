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
          <ItemNav
            activeIcon="/icons/mais-vistas-ativo.png"
            inactiveIcon="/icons/mais-vistas-inativo.png"
          >
            Mais vistas
          </ItemNav>
          <ItemNav
            activeIcon="/icons/mais-curtidas-ativo.png"
            inactiveIcon="/icons/mais-curtidas-inativo.png"
          >
            Mais curtidas
          </ItemNav>
          <ItemNav
            activeIcon="/icons/novas-ativo.png"
            inactiveIcon="/icons/novas-inativo.png"
          >
            Novas
          </ItemNav>
          <ItemNav
            activeIcon="/icons/surpreenda-me-ativo.png"
            inactiveIcon="/icons/surpreenda-me-inativo.png"
          >
            Surpreenda-me
          </ItemNav>
        </StyledList>
      </nav>
    </aside>
  );
};

export default Sidebar;
