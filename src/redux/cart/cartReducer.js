const initialState = {
  selectedProducts: [],
  checkout: false,
  overallProducts: 0,
  overallPrice: 0,
  recentBuys: [],
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

const cartReducer = (state = initialState, action) => {
  console.log(state.recentBuys);
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
      return {
        ...state,
        selectedProducts: [...state.selectedProducts],
        ...collector(state.selectedProducts),
        checkout: false,
      };
    case "Delete":
      const newSelectedProducts = state.selectedProducts.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedProducts = newSelectedProducts;
      return {
        ...state,
        selectedProducts: [...state.selectedProducts],
        ...collector(state.selectedProducts),
        checkout: false,
      };
    case "Increase":
      const Iindex = state.selectedProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedProducts[Iindex].quantity++;
      return {
        ...state,
        selectedProducts: [...state.selectedProducts],
        ...collector(state.selectedProducts),
        checkout: false,
      };
    case "Decrease":
      const Dindex = state.selectedProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedProducts[Dindex].quantity--;
      return {
        ...state,
        selectedProducts: [...state.selectedProducts],
        ...collector(state.selectedProducts),
        checkout: false,
      };
    case "checkout":
      const timestamp = Date.now();
      const checkoutObject = {
        id: timestamp,
        products: [...state.selectedProducts],
        price: state.overallPrice
      };
      return {
        ...(state = {
          selectedProducts: [],
          overallProducts: 0,
          overallPrice: 0,
          checkout: true,
          recentBuys: [...state.recentBuys,checkoutObject],
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
