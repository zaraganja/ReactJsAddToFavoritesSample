import React, { useContext } from "react";
import Flatlist from 'flatlist-react';
import Card from "../components/ui/Card";
import classes from '../components/meetups/MeetupItem.module.css'
import { FavContext } from "../store/Favorites-context";
import MeetupItem from "../components/meetups/MeetupItem";

const Favorites =(props)=>{
     const {FavoritesList}=useContext(FavContext);

    const  renderFaves = (item, index) => {
        return (
            <Card>
                <MeetupItem item={item} key={index} ></MeetupItem>
            </Card>
        );
    }

    return(
        <section>
        <h1>Favorites</h1>
        <ul className={classes.list}>
            <Flatlist
                list={FavoritesList}
                renderItem={renderFaves}
                renderWhenEmpty={() => <div>List is empty!</div>}
                // sortBy={["firstName", { key: "lastName", descending: true }]}
                // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
            />
        </ul>
    </section>
    )
}

export default Favorites;