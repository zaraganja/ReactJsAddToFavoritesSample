import React, { useEffect, useState } from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from '../components/meetups/MeetupItem.module.css'
import Card from "../components/ui/Card";
import axios from 'axios';
import Flatlist from 'flatlist-react';





const AllMeetUps = (props) => {

 const  renderDummyData = (item, index) => {
        return (
            <Card>
                <MeetupItem item={item} key={index} ></MeetupItem>
            </Card>
        );
    }

    const [DUMMY_DATA, setDUMMY_DATA] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getMeetUpData = () => {
        axios.get('https://reactjssampleone-default-rtdb.firebaseio.com/meetups.json'
        ).then(res => {

            const myres = res.data;
            // console.log(myres);
            var myARR= [];
            myARR=Object.values(Object.values(myres));
            console.log(typeof myARR);
        
           setDUMMY_DATA(myARR) ;
            // console.log(JSON.stringify(Object.values(Object.values(myres))));

            console.log(DUMMY_DATA);
            setisLoading(false);
            //  console.log(DUMMY_DATA);

        })
    }

    useEffect(() => {
        if (isLoading) {
            getMeetUpData();
        }
    });
    //un araye akhare useeffect mige ke age harchi dakhele un araye bezari meghdaresh taghyir kone, useeffect ejra mishe!woow!

    // const DUMMY_DATA = [
    //     {
    //         id: 'm1',
    //         title: 'This is a first meetup',
    //         image:
    //             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    //         address: 'Meetupstreet 5, 12345 Meetup City',
    //         description:
    //             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    //     },
    //     {
    //         id: 'm2',
    //         title: 'This is a second meetup',
    //         image:
    //             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    //         address: 'Meetupstreet 5, 12345 Meetup City',
    //         description:
    //             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    //     },
    //     {
    //         id: 'm3',
    //         title: 'This is a third meetup',
    //         image:
    //             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    //         address: 'Meetupstreet 5, 12345 Meetup City',
    //         description:
    //             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    //     },
    // ];


    return (
        <section>
            <h1>all meetups</h1>
            <ul className={classes.list}>
                {/* {DUMMY_DATA.map(({ item, index }) => {
                    return (
                        <Card>
                            <MeetupItem item={item} key={index} ></MeetupItem>
                        </Card>
                    )
                })} */}
                <Flatlist
                    list={DUMMY_DATA}
                    renderItem={renderDummyData}
                    renderWhenEmpty={() => <div>List is empty!</div>}
                    // sortBy={["firstName", { key: "lastName", descending: true }]}
                    // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
                />
            </ul>
        </section>
    )
};

export default AllMeetUps;