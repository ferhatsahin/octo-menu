import { MenuItemWrapper } from "./styles";
import { useDispatch } from 'react-redux';

import useNavigationMenu from "../../hooks/useNavigationMenu";

function MenuItem({ id, label, items }) {

    const { activeItemId, setActiveItem } = useNavigationMenu();
    
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(setActiveItem(id));
    }

    const isActive= activeItemId === id;

    const subMenuItemRenderer = () => {
        if(!items?.length || !isActive) return null;
        return <ul>{items.map(item => <MenuItem key={item.id} {...item} />)}</ul>
    }

    return (
        <>
        <MenuItemWrapper active={isActive} onClick={handleOnClick}>
            <span>{label}</span>
            {subMenuItemRenderer()}
        </MenuItemWrapper>
        </>
    )
}

export default MenuItem
