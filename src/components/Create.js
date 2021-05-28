import React, { useState, useEffect } from 'react'
import firebase from '../components/firebase'
import validator from 'validator'

const Create = (props) => {

    if(localStorage.getItem('Insert') == 1){
        localStorage.setItem('Insert', 0)
    }

    const button = {
        backgroundColor: '#4a32a8',
        borderColor: '#4a32a8',
        marginTop: '5%',
        float: 'left',
        width: '30%',
        padding: '9px',
        color: 'white',
        borderRadius: '1%'
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

    const handleCreate = () => {
        if(localStorage.getItem('totalInput') == 20){
            alert('Limit Reached');
        }
        else if(props.firstname == ''){
            alert('Please Enter the First Name it should not be empty')
        }
        else if(props.lastname == ''){
            alert('Please Enter the Last Name it should not be empty')
        }
        else if(props.email == ''){
            alert('Please Enter the Email it should not be empty')
        }
        else if(props.firstname.length >= 45){
            alert('First Name is more than 45 characters')
        }
        else if(props.lastname.length >= 45){
            alert('Last Name is more than 45 characters')
        }
        else if(props.email.length >= 45){
            alert('Email is more than 45 characters')
        }
        else if(!validator.isEmail(props.email)){
            alert('Email is incorrect')
        }
        else{
            list.map(lists => {
                if(lists.email == props.email){
                    alert('Email already exist')
                    localStorage.setItem('Insert', 1)
                }
            })          
        }
        
        if(localStorage.getItem('Insert') == 0){
                const dbs = firebase.firestore();
                dbs.collection("crud").add({ name: props.firstname, secondName: props.lastname, email: props.email });
                alert('New record has been inserted'); 
        }
    }

    return (
        <>
            {
                <button style={button} onClick={handleCreate}>Create</button>
            }
            
        </>
    );
}

export default Create;