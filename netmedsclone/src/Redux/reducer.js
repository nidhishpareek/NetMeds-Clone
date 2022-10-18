import {
  ERRORSTATE,
  LOADINGSTATE,
  SETCART,
  TOGGLEVIEW,
  SETCARTBYREDUCER,
  EMPTYCART,
  REMOVECART,
  RESETLOGIN,
  CHANGELOGINSTATUS,
} from "./action";

const initState = {
  loading: false,
  error: false,
  cart: [],
  mobileView: false,
  isLoggedIn: JSON.parse(localStorage.getItem("userDetails")) || false,
  userDetails: JSON.parse(localStorage.getItem("userDetails")) || [],
};
function reducer(state = initState, { type, payload }) {
  switch (type) {
    case LOADINGSTATE: {
      return { ...state, loading: true, error: false, cart: [] };
    }
    case ERRORSTATE: {
      return { ...state, loading: false, error: true, cart: [] };
    }

    case SETCART: {
      return {
        ...state,
        loading: false,
        error: false,
        cart: [...state.cart, payload],
      };
    }

    case EMPTYCART: {
      return { ...state, loading: false, error: false, cart: [] };
    }
    case SETCARTBYREDUCER: {
      // console.log('setcart called', [...state.cart, ...payload])
      return {
        ...state,
        loading: false,
        error: false,
        cart: [...state.cart, ...payload],
      };
    }
    case TOGGLEVIEW: {
      // console.log('view Changed')
      return { ...state, mobileView: payload };
    }
    case REMOVECART: {
      let updated = state.cart.filter((el) => el.id !== payload);
      return {
        loading: true,
        error: false,
        cart: updated,
      };
    }
    case RESETLOGIN: {
      return {
        ...state,
        loggedIn: false,
        userDetails: [],
      };
    }
    case CHANGELOGINSTATUS: {
      return {
        ...state,
        userDetails: localStorage.setItem(
          "userDetails",
          JSON.stringify(payload)
        ),
        isLoggedIn: !state.isLoggedIn,
      };
    }
    default: {
      return state;
    }
  }
}
export default reducer;
