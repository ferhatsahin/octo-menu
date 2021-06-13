import MenuItem from '../MenuItem';
import { useNavigationMenu } from '../../hooks';

import { StyledSidebarContainer } from './styles';

function SideBar() {
  const { menuItems } = useNavigationMenu();

  const renderMenuItems = () => {
    return menuItems.map((menuItem) => (
      <MenuItem key={menuItem.id} {...menuItem} id={[menuItem.id, -1]} />
    ));
  };

  return <StyledSidebarContainer>{renderMenuItems()}</StyledSidebarContainer>;
}

export default SideBar;
