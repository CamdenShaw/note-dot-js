import React from 'react';

import DeleteButton from '../../components/Buttons/DeleteButton';
import SaveButton from '../../components/Buttons/SaveButton';
import PublishButton from '../../components/Buttons/PublishButton';

const HeaderRight = (props) => {
    return (
        <div className="modal-header-right">
            <PublishButton publishNote={props.publishNote}/>
            <SaveButton addNote={props.addNote} />
            <DeleteButton removeNote={props.removeNote}/>
        </div>
    )
}

export default HeaderRight