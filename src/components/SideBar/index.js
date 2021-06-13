import useNavigationMenu from '../../hooks/useNavigationMenu';
import MenuItem from '../MenuItem';

import { StyledSidebarContainer } from './styles';

function SideBar() {

  const { menuItems, activeItem, setMenuItem } = useNavigationMenu();

  const renderMenuItems = () => {
      return menuItems.map(((menuItem) => <MenuItem key={menuItem.id} {...menuItem} />))
  }

  return (
    <StyledSidebarContainer>
      {renderMenuItems()}
    </StyledSidebarContainer>
  );
}

export default SideBar;
