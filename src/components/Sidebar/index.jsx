import styled from "styled-components";

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
          <li>
            <a href>Início</a>
          </li>
        </StyledList>
      </nav>
    </aside>
  );
};

export default Sidebar;
