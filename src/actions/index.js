/* Action creator */ 
export const selectItem = (item) => {
  /* Return an action */
  return {
    type: 'ITEM_SELECTED',
    payload: item
  };
};

export const toggleForm = () => {
  return {
    type: 'TOGGLE_FORM'
  }
}