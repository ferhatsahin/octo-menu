
import { SET_ACTIVE_ITEM  } from '../action_names';
import menuData from '../menuData'

const INITIAL_MENU_STATE = {
    activeItemId : -1,
    menuItems: menuData
  };
  
  const menuReducer = (state = INITIAL_MENU_STATE, action) => {
    switch (action.type) {
      case SET_ACTIVE_ITEM:
        const shouldCloseAll = state.activeItemId === action.payload
        return {
          ...state,
          activeItemId: shouldCloseAll ? -1 : action.payload
        }
      default:
        return state;
    }
  };
  
  export default menuReducer;
  