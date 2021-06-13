import { useSelector, useDispatch } from 'react-redux';
import { setActiveItem } from '../redux/actions/menu_actions';

const useNavigationMenu = () => {
  const { activeItem, menuItems } = useSelector(({ menu }) => menu);
  const dispatch = useDispatch();

  const setMenuItem = (ids) => dispatch(setActiveItem(ids));

  return {
    menuItems,
    activeItem,
    setMenuItem,
  };
};

export default useNavigationMenu;
