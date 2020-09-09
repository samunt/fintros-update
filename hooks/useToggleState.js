import {useState} from 'react';
export default function useToggleState(initialVal = false) {
    const [state, changeState] = useState(initialVal);
    const toggle = () => {
        changeState(!state)
    };
    // return a piece of state AND a function to toggle it
    return [state, toggle]
}
