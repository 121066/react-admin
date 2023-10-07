import {useEffect} from 'react'
function useTimer(delay,fn){
    useEffect(()=>{
        const timer=setTimeout(() => {
            fn()
        }, delay);
        return ()=>{
            clearTimeout(timer)
        }
    },[delay,fn])

}
export default useTimer