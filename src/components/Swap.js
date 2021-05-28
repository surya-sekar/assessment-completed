import React, { useState, useEffect } from 'react';
import firebase from '../components/firebase';

const Swap = (props) => {

    const [swap, setSwap] = useState(false);

    if (localStorage.getItem('count') == null) {
        localStorage.setItem('count', 0)
    }

    const handleSwap = () => {
        setSwap(false)
        if (localStorage.getItem('count') == 0) {
            localStorage.setItem('count', 1)
            const local = {
                id: props.id,
                name: props.name,
                secondName: props.secondName,
                email: props.email,
            }

            localStorage.setItem('data', JSON.stringify(local))

        } else if (localStorage.getItem('count') == 1) {
            localStorage.setItem('count', 2)

            const swapLocal = {
                swapid: props.id,
                swapname: props.name,
                swapsecondName: props.secondName,
                swapemail: props.email,
            }
            localStorage.setItem('swapdata', JSON.stringify(swapLocal))

            const retrivedData = JSON.parse(localStorage.getItem('data'));

            var id1 = retrivedData.id;
            var name1 = retrivedData.name;
            var lastname1 = retrivedData.secondName;
            var email1 = retrivedData.email;

            const swapretrivedData = JSON.parse(localStorage.getItem('swapdata'));

            var id2 = swapretrivedData.swapid;
            var name2 = swapretrivedData.swapname;
            var lastname2 = swapretrivedData.swapsecondName;
            var email2 = swapretrivedData.swapemail;

            const db = firebase.firestore()

            db.collection('crud').doc(id2).set({ ...props, 'name': name1, 'secondName': lastname1, 'email': email1 });
            db.collection('crud').doc(id1).set({ ...props, 'name': name2, 'secondName': lastname2, 'email': email2 });

            localStorage.clear();

            alert('Swapped successfully')

            
        }
        //localStorage.setItem('count', 1)
    }


    return (
        <>
                {
                    swap ?
                        <button className='btn btn-success'>Swap</button>
                        :
                        <button className='btn btn-warning' onClick={handleSwap}><span class="glyphicon glyphicon-refresh"></span></button>
                }
        </>
    )
}

export default Swap;