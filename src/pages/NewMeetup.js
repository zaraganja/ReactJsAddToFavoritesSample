import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Classes from "../components/meetups/NewMeetupForm.module.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const NewMeetup = (props) => {
    // https://reactrouter.com/en/6.8.1/hooks/use-navigation
    const usenavigate = useNavigate();
    const AddMeetup = (title, image, address, description) => {
        console.log(title, image, address, description);
        // I use console.firebase.google.com zahra@melorinet.com ,realtime database to give me an API
        // meetup.json ro khodemun be API ezafe mikonım
        axios.post('https://reactjssampleone-default-rtdb.firebaseio.com/meetups.json', {
            title: title,
            image: image,
            address: address,
            description: description
        }).then(rsponse => {
            console.log(rsponse);

            usenavigate('/');
        })
    }
    return (
        <section className={Classes.section}>
            <h1>Add New Meetup</h1>
            <NewMeetupForm AddMeetup={AddMeetup} />
        </section>
    )
}

export default NewMeetup;