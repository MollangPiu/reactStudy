import { getCookies } from './Cookie불러오기';

export default function Study() {
    return(
        <div>
            <input type="button" value="Cookie 저장" onClick={
                () => {
                    document.cookie = 'username=Hello';
                }
            }/>

            <input type="button" value="쿠키 불러오기" onClick={
                () => {
                    const msg = getCookies('username');
                    alert(msg);
                }
            } />
        </div>
    )
}