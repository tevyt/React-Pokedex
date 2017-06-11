import { fromJS } from 'immutable';

const initialState = fromJS({
  page: 1
});

export default (state=initialState, action) => {
  switch(action.type){
  case 'NEXT_PAGE':
    return state.update('page', (page) => page + 1);
  case 'PREVIOUS_PAGE':
    return state.update('page', (page) => page - 1 || 1);
  default:
    return state;
  }
};