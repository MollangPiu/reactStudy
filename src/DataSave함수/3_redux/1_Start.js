import { Provider } from 'react-redux';
import store from './redux/store';
import Input입력 from './2_Input';
import Output from './3_Output';

export default function Start() {
    return (
        <div>
            <h1>Redux 관리 시스템</h1>
            <Provider store={store}>
                <Input입력 />
                <Output />
            </Provider>
        </div>
    );
}
