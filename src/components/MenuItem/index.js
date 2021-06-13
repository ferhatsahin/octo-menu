import { CarrotDown } from '../../assets/icons';
import { useNavigationMenu } from '../../hooks';
import { MenuItemWrapper, MenuItemContainer } from './styles';

function MenuItem({ id, label, items }) {
  const { activeItem, setMenuItem } = useNavigationMenu();
  const [activeParentMenuId] = activeItem;
  const [parentMenuId] = id;

  const isActive = activeParentMenuId === parentMenuId;

  return (
    <MenuItemWrapper active={isActive}>
      <MenuItemContainer onClick={() => setMenuItem(id)}>
        <span>{label}</span>
        {items && <CarrotDown width={16} height={16} />}
      </MenuItemContainer>
      {items && (
        <ul>
          {items.map((item) => (
            <MenuItem key={item.id} {...item} id={[parentMenuId, item.id]} />
          ))}
        </ul>
      )}
    </MenuItemWrapper>
  );
}

export default MenuItem;
