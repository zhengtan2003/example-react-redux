import {useSelector} from 'react-redux';
import {RootState} from "./store";


const ComponentA = () => {
    const counter = useSelector((state: RootState) => state.counter)
    return (
        <div style={{border: '1px solid green'}}>
            <h3>Store</h3>
            <div>
                counter.value：
                {counter.value}
            </div>
        </div>
    );
};

export default ComponentA;