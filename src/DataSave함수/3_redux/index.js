import { createStore } from 'redux';
import counter from './store';

export default function index() {

    let store = createStore(counter);

    return (
        <div>
            <h1>index</h1>
        </div>
    )
}
