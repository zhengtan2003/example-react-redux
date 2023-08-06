import {configureStore, Middleware} from "@reduxjs/toolkit";
import {counterSlice, CounterState} from "./slices/counter";

export type RootState = {
    counter: CounterState
};

const loggerMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
    // 在dispatch到reducer之前记录action和当前状态
    console.log('Dispatching action:', action);
    console.log('Current state:', store.getState());

    // 调用next函数，将action传递给下一个Middleware或reducer
    const result = next(action);

    // 在dispatch到reducer之后记录更新后的状态
    console.log('New state:', store.getState());

    // 返回结果
    return result;
};

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
    middleware: [loggerMiddleware],
})

