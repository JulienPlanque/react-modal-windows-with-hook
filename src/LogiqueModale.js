import {useState} from 'react'

const LogiqueModale = () => {
    const [revele, changeRevele] = useState(false)

    function toogle() {
        changeRevele(!revele)
    }

    return {
        revele,
        toogle
    }
};

export default LogiqueModale;