import {useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

 const useDarkmode = ()=>{
    const [darkmode, setDarkmode] = useLocalStorage('darkmode', false)

    useEffect(()=>{
        if (darkmode===true)
            document.querySelector('body').classList.add('dark-mode')
        else
            document.querySelector('body').classList.remove('dark-mode')

    }, [darkmode])

    return [darkmode, setDarkmode]
}
export default useDarkmode