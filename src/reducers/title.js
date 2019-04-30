const title = (state = "test title", action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return action.payload.title;
    case "WAIT":
      return "wait";
    default:
      return state;
  }
};
export default title;
