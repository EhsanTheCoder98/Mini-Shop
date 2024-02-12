import React from "react";

const initialState = {
  selectedProducts: [],
  likedProducts: [],
  checkout: false,
  overallProducts: 0,
  overallPrice: 0,
  recentBuys: [],
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return initialState;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch {
    
  }
};

const collector = (item) => {
  const overallProducts = item.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const overallPrice = item.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return { overallProducts: overallProducts, overallPrice: overallPrice };
};

const cartReducer = (state = loadState(), action) => {
  switch (action.type) {
    case "Add-Item":
      if (
        !state.selectedProducts.find((item) => item.id === action.payload.id)
      ) {
        state.selectedProducts.push({
          ...action.payload,
          quantity: 1,
        });
      }
      const newState = {
        ...state,
        selectedProducts: [...state.selectedProducts],
        ...collector(state.selectedProducts),
        checkout: false,
      };
      saveState(newState);
      return newState;
    case "Delete":
      const newSelectedProducts = state.selectedProducts.filter(
        (item) => item.id !== action.payload.id
      );
      const newStateDelete = {
        ...state,
        selectedProducts: [...newSelectedProducts],
        ...collector(newSelectedProducts),
        checkout: false,
      };
      saveState(newStateDelete);
      return newStateDelete;
    case "Increase":
      const Iindex = state.selectedProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedProducts[Iindex].quantity++;
      const newStateIncrease = {
        ...state,
        selectedProducts: [...state.selectedProducts],
        ...collector(state.selectedProducts),
        checkout: false,
      };
      saveState(newStateIncrease);
      return newStateIncrease;
    case "Decrease":
      const Dindex = state.selectedProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedProducts[Dindex].quantity--;
      const newStateDecrease = {
        ...state,
        selectedProducts: [...state.selectedProducts],
        ...collector(state.selectedProducts),
        checkout: false,
      };
      saveState(newStateDecrease);
      return newStateDecrease;
    case "checkout":
      const timestamp = Date.now();
      const checkoutObject = {
        id: timestamp,
        products: [...state.selectedProducts],
        price: state.overallPrice,
      };
      const newStateCheckout = {
        ...state,
        selectedProducts: [],
        overallProducts: 0,
        overallPrice: 0,
        checkout: true,
        recentBuys: [...state.recentBuys, checkoutObject],
        likedProducts: [...state.likedProducts],
      };
      saveState(newStateCheckout);
      return newStateCheckout;
    case "Like-Product":
      const newStateLike = {
        ...state,
        likedProducts: [...state.likedProducts, action.payload],
      };
      saveState(newStateLike);
      return newStateLike;
    case "Unliked":
      const newUnliked = state.likedProducts.filter(
        (item) => item.id !== action.payload.id
      );
      const newStateUnliked = {
        ...state,
        likedProducts: [...newUnliked],
      };
      saveState(newStateUnliked);
      return newStateUnliked;
    default:
      return state;
  }
};

export default cartReducer;
