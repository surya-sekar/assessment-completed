import React, { useState, useEffect } from 'react';
import firebase from '../components/firebase'
import Delete from '../components/Delete';
import Edit from '../components/Edit';
import Swap from '../components/Swap'

const Display = () => {

    let i = 0;

    const result = {
        padding: '1%',
        marginLeft: '7%',
        backgroundColor: 'black',
        marginBottom: '2%',
        marginTop: '2%',
        borderRadius: '5%',
        color: 'white'
    }

    const labelStyle = {
        float: 'left'
    }

    const [list, setlist] = useState([]);

    const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection("crud").get();
        setlist(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        fetchData();
    }, [list]);

    return (
        <>
            {
                list.map(lists => (
                    <div className="col-sm-2" id={lists.id} style={result} key={lists.id}>
                        <label style={labelStyle}>#{++i}</label>
                        <Swap id={lists.id} name={lists.name} secondName={lists.secondName} email={lists.email} />
                        <Delete deleteid={lists.id} />
                        <Edit id={lists.id} name={lists.name} secondName={lists.secondName} email={lists.email} />
                    </div>
                ))
            }

            {localStorage.setItem('totalInput', i)}

        </>
    )
}

export default Display;