import React from 'react';

import Aux from '../Aux'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHendler = (WrappedComponent) => {
    return (props) => {
        return (
            <Aux>
                <Modal>
                    Something didn't work!
                </Modal>
                <WrappedComponent />
            </Aux>
        )
    }
}

export default withErrorHendler;