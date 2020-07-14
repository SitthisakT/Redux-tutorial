//Action Type
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//Action Creators
const increment = () => ({
  type: INCREMENT
});

const decrement = () => ({
  type: DECREMENT
});

const reset = () => ({
  type: RESET
});

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

const render = () => {
  counterDisplay.innerHTML = `Count : ${store.getState().count}`;
};

store.subscribe(() => {
  render();
});

const btnIncrement = document.getElementById("btnIncrement");
const btnDecrement = document.getElementById("btnDecrement");
const btnReset = document.getElementById("btnReset");
const counterDisplay = document.getElementById("counterDisplay");

btnIncrement.addEventListener("click", () => {
  store.dispatch(increment());
});

btnDecrement.addEventListener("click", () => {
  store.dispatch(decrement());
});

btnReset.addEventListener("click", () => {
  store.dispatch(reset());
});
