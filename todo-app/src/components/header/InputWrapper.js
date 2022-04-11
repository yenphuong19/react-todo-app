import React, { useContext } from 'react';
import { ModeContext } from '../../services/Context'
import { MODE_SEARCH, MODE_CREATE } from '../../services/mode'
import InputBox from './InputBox';
import SearchBox from './SearchBox';

function InputWrapper() {
    const [mode] = useContext(ModeContext)

    switch (mode) {
        case MODE_CREATE:
            return <InputBox />
        case MODE_SEARCH:
            return <SearchBox />
        default:
            return null;
    }
}

export default InputWrapper;