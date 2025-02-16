import { Provider } from 'react-redux';
import store2 from './store';
import Input입력 from './2_Input';
import Output from './3_Output';
export default function Start() {



    return (
        <div>
            <h1>Start</h1>
            <Provider store={store2}>
                <Input입력 />
                <Output />
            </Provider>
        </div>
    )
}
