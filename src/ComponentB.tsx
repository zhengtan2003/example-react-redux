import {useDispatch} from 'react-redux';
import {counterSlice} from "./slices/counter";

const {increment, decrement} = counterSlice.actions;
const ComponentB = () => {
    const dispatch = useDispatch();
    return (
        <div style={{border: '1px solid red'}}>
            <h3>Actions</h3>
            <div>
                <span>reducers.increment：</span>
                <button onClick={() => dispatch(increment())}>
                    +1
                </button>
            </div>
            <div>
                <span>reducers.decrement：</span>
                <button onClick={() => dispatch(decrement())}>
                    -1
                </button>
            </div>
        </div>
    );
};

export default ComponentB;