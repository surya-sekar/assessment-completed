import React, { useState } from 'react';
import Create from '../components/Create'
import Display from '../components/Display'

const Form = () => {

    const container = {
        backgroundColor: '#cad5e3',
        width: '100%',
        borderRadius: '5px',
        marginTop: '5%',
        borderStyle: 'dashed',
        borderColor: '#5b5bde',
        padding: '5%'
    }

    const label = {
        float: 'left',
        marginLeft: '2%',
        color: 'black',
        fontSize: '20px',
        marginRight: '8px'
    }

    const textBox = {
        width: '80%',
    }

    const [firstName, setfirstName] = useState();
    const [lastName, setlastName] = useState();
    const [email, setEmail] = useState();

    return (
        <>
            <div className="container" style={container}>
                <div className="row">
                    <div className="col">
                        <label style={label}>First Name</label>
                        <input class="form-control" style={textBox} onChange={(e) => setfirstName(e.target.value)} value={firstName} required />
                    </div>
                    <div className="col">
                        <label style={label}>Last Name</label>
                        <input class="form-control" style={textBox} onChange={(e) => setlastName(e.target.value)} value={lastName} />
                    </div>
                    <div className="col">
                        <label style={label}>Email</label>
                        <input class="form-control" type='email' style={textBox} onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="col">
                        <Create firstname={firstName} lastname={lastName} email={email} />
                    </div>
                </div>
            </div>
            <div className="row">
                    <Display></Display>
            </div>
        </>
    );
}

export default Form;