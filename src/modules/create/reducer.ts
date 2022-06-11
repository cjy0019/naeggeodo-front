import { createReducer } from 'typesafe-actions';
import {
  ADD_TAG,
  INSERT_TITLE,
  INSERT_LINK,
  MINUS_MAX_COUNT,
  PLUS_MAX_COUNT,
  REMOVE_TAG,
  SELECT_ORDER_TIME_TYPE,
  SELECT_CATEGORY,
  CREATE_CHAT_ROOM_SUCCESS,
  INSERT_PLACE,
  insertPlace,
  SAVE_USER_ID,
} from './actions';
import {
  CreateStates,
  InsertLinkAction,
  InsertTitleAction,
  SelectOrderTimeTypeAction,
  SelectCategoryAction,
  AddTagAction,
  RemoveTagAction,
  insertPlaceAction,
  saveUserIdAction,
} from './types';

const initialCreateStates: CreateStates = {
  address: '',
  category: null,
  link: 'http://',
  place: '',
  title: '',
  user_id: '',
  tag: [],
  maxCount: 1,
  orderTimeType: '',
};

export const createStates = createReducer<CreateStates>(initialCreateStates, {
  [SELECT_ORDER_TIME_TYPE]: (state, action: SelectOrderTimeTypeAction) => ({
    ...state,
    orderTimeType: action.payload.orderTimeType,
  }),
  [INSERT_TITLE]: (state, action: InsertTitleAction) => ({
    ...state,
    title: action.payload.title,
  }),
  [INSERT_LINK]: (state, action: InsertLinkAction) => ({
    ...state,
    link: action.payload.link,
  }),
  [SELECT_CATEGORY]: (state, action: SelectCategoryAction) => ({
    ...state,
    category: action.payload.category,
  }),
  [ADD_TAG]: (state, action: AddTagAction) => {
    if (state.tag.length >= 5) return state;
    else {
      return {
        ...state,
        tag: [...state.tag, action.payload.keyword],
      };
    }
  },
  [REMOVE_TAG]: (state, action: RemoveTagAction) => ({
    ...state,
    tag: state.tag.filter((_, index) => index !== action.payload.index),
  }),
  [PLUS_MAX_COUNT]: (state, _) => {
    if (state.maxCount >= 5) {
      return state;
    } else {
      return {
        ...state,
        maxCount: state.maxCount + 1,
      };
    }
  },
  [MINUS_MAX_COUNT]: (state, _) => {
    if (state.maxCount <= 1) {
      return state;
    } else {
      return {
        ...state,
        maxCount: state.maxCount - 1,
      };
    }
  },
  [INSERT_PLACE]: (state, action: insertPlaceAction) => ({
    ...state,
    place: action.payload.place,
  }),
  [SAVE_USER_ID]: (state, action: saveUserIdAction) => ({
    ...state,
    user_id: action.payload.user_id,
  }),
  [CREATE_CHAT_ROOM_SUCCESS]: (state, action) => {
    return { ...state };
  },
});
