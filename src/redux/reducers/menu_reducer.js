
import { SET_ACTIVE_ITEM  } from '../action_names';
import menuData from '../menuData'

const INITIAL_MENU_STATE = {
    activeItem : [-1, -1],
    menuItems: menuData
  };
  
  const menuReducer = (state = INITIAL_MENU_STATE, action) => {
    switch (action.type) {
      case SET_ACTIVE_ITEM:
        const [parentItemId, itemId] = action.payload
        const [currentParentItemId] = state.activeItem;
        const collapseParentItem =  (parentItemId === currentParentItemId && itemId === -1);
        
        return {
          ...state,
          activeItem: collapseParentItem ? INITIAL_MENU_STATE.activeItem : action.payload
        }
      default:
        return state;
    }
  };
  
  export default menuReducer;
  