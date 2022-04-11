import React from 'react';
import ButtonWrapper from './ButtonWrapper';
import PendingQuantity from './PendingQuantity';
import Filter from './Filter';

function Footer () {
    return (
        <footer className="d-flex justify-content-between">
            <div className="row">
                <ButtonWrapper />
                <PendingQuantity />
            </div>
            <Filter />
        </footer>
    )
}

export default Footer;