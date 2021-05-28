import React from 'react';
import firebase from 'firebase';

const Delete = (props) => {

    const buttonStyle = {
        marginLeft: '10px',
        marginRight: '10px'
    }

    const handleDelete = () => {
        const db = firebase.firestore()
        db.collection('crud').doc(props.deleteid).delete();
    }

    return (
        <>
            <button className='btn btn-danger' style={buttonStyle} onClick={handleDelete}><span class="glyphicon glyphicon-trash"></span></button>
        </>
    )

}

export default Delete;