import MenuItem from '../MenuItem';
import { useNavigationMenu } from '../../hooks';

import { StyledSidebarContainer } from './styles';

function SideBar() {
  const { menuItems } = useNavigationMenu();

  const renderMenuItems = () => {
    if(!menuItems?.length) return null;
    return menuItems.map((menuItem) => (
      <MenuItem key={menuItem.id} {...menuItem} id={[menuItem.id, -1]} />
    ));
  };

  return <StyledSidebarContainer>{renderMenuItems()}</StyledSidebarContainer>;
}

export default SideBar;
