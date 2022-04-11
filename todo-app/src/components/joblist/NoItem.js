import React from 'react';
import { MSG_NO_ITEMS } from '../../assets/text/en_US'

function NoItem () {
    return (
        <p className="alert alert-info">{MSG_NO_ITEMS}</p>
    )
}

export default NoItem;