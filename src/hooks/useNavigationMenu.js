import { useSelector, useDispatch } from "react-redux";
import { setActiveItem } from "../redux/actions/menu_actions";

const useNavigationMenu = () => {
  const { activeItemId, menuItems } = useSelector(({ menu }) => menu);
  return {
    menuItems,
    activeItemId,
    setActiveItem
  };
};

export default useNavigationMenu;
