
import React, { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css"

//onsubmit vaghti ke dakhele form btn yı bashe va click koni ejra mishe
// htmlFor =>  id e input ro midim
const NewMeetupForm = (props) => {
    // be jaye ref useref, mitunestim az onchange() va state ham estefade konim
    const TitleInputRef = useRef();
    const ImageInputRef = useRef();
    const AddrsInputRef = useRef();
    const DescInputRef = useRef();


    const SubmitHandler = (event) => {
        //prevents browser to act default action
        event.preventDefault();
        props.AddMeetup(TitleInputRef.current.value, ImageInputRef.current.value,AddrsInputRef.current.value,DescInputRef.current.value);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={SubmitHandler} >
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input required type="text" id="title" ref={TitleInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup image</label>
                    <input required type="url" id="image" ref={ImageInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input required type="text" id="address" ref={AddrsInputRef} ></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows={5} ref={DescInputRef} ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )

}

export default NewMeetupForm;