import { useId } from "react";

export default function UseId1() {

    const id = useId();
    return (
        <div>
            <h2>useId1</h2>
            {id}<br/>
            <label htmlFor={`${id}-1`}>아이디</label>
            <input type='text' id={`${id}-1`} /><br/>
            {id}<br/>
            <label htmlFor={`${id}-2`}>아이디</label>
            <input type='text' id={`${id}-2`} /><br/>
        </div>
    )
}