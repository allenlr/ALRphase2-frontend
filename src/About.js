import React from 'react';

function About(){
    return (
        <div style={{color:'white', position:'absolute', top:'20%', flexWrap: 'wrap'}}>
            <h2>Welcome!</h2>
            <br/>
            <br/>
            <p style={{flex: 'inline', maxWidth:'580px'}}>
                Coin Data is a web-based application that provides a
                general list of popular crypto-currencies that can be searched and, when clicked,
                display more details about the selected crypto. A form is provided allowing the
                user to add their own crytpo projects to the list as a form of imaginative
                entertainment.
            </p>
        </div>
    )
}
export default About;