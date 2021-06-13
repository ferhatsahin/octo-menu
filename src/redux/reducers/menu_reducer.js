
import { SET_ACTIVE_ITEM  } from '../action_names';
import menuData from './menuData'

const INITIAL_MENU_STATE = {
    activeItem: -1,
    menuItems: menuData
  };
  
  const menuReducer = (state = INITIAL_MENU_STATE, action) => {
    switch (action.type) {
      //
      default:
        return state;
    }
  };
  
  export default menuReducer;
  