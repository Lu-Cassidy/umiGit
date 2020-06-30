import * as serveices from '@/services/index';
import { Effect, Reducer, Subscription } from 'umi';
export interface HomeState{
  lists:Array<obj>;
  length:Number;
  pathname:string;
  inputValue:string
}
interface obj{
  name:string;
  value:number
}
interface MyHomeType {
  namespace: string;
  effects: {
    query: Effect;
  };
  reducers: {
    update: Reducer;
    path: Reducer;
    save: Reducer;
    saveInput: Reducer;
  };
  state: HomeState;
  subscriptions: {
    setup: Subscription;
  };
}
const homeModel: MyHomeType = {
  namespace: 'home',
  // 初始值
  state: {
    lists: [],
    length: 0,
    pathname: '',
    inputValue: '',
  },
  // 异步请求
  effects: {
    *query({ payload }, { call, put }) {
      const res = yield call(serveices.getData);
      // console.log(res);
      yield put({
        type: 'update',
        payload: { lists: res.lists, length: res.lists.length },
      });
    },
  },
  // 同步请求
  reducers: {
    update(state, { payload }) {
      return { state, ...payload };
    },
    path(state, { payload }) {
      return { ...state, ...payload };
    },
    save(state, { payload }) {
      console.log(payload);
      return { ...state, ...payload };
    },
    saveInput(state) {
      console.log(state);
      return { ...state };
    },
  },
  // 监听
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname == '/') {
          dispatch({ type: 'saveInput' });
        }
      });
    },
  },
};
export default homeModel;
