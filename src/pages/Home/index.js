import React from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../../components/SideBar';
import { SelectedMenuItemContainer, Container } from './styles';

const getCurrentMenuInfo = (activeItem, menuItems) => {
  const [parentId, subId] = activeItem;
  const { label: parentItemLabel = '', items = [] } =
    menuItems.find((menuItem) => menuItem.id === parentId) || {};
  const { label: subItemLabel = '' } =
    items.find((item) => item.id === subId) || {};
  return { parentItemLabel, subItemLabel };
};

function Home() {
  const { activeItem, menuItems } = useSelector(({ menu }) => menu);
  const { parentItemLabel, subItemLabel } = getCurrentMenuInfo(
    activeItem,
    menuItems
  );

  return (
    <Container>
      <SideBar />
      <SelectedMenuItemContainer>
        <h1>{parentItemLabel}</h1>
        <h3>{subItemLabel}</h3>
        {!parentItemLabel && <h2>No menu item selected</h2>}
      </SelectedMenuItemContainer>
    </Container>
  );
}

export default Home;
