import React, { useContext, useEffect } from "react";
import { FavContext } from "../../store/Favorites-context";
import classes from './MeetupItem.module.css';




const MeetupItem = (props) => {
   
    const { AddToTotalFaves, deleteFromTotalFaves, totalFavorites, UpdateFaveList ,FavoritesList,CheckRepeatedFavItem,deleteFromFaveList,CheckRepeatedFavItemBOOLEAN} = useContext(FavContext);
    const AddToFavoritesHandler = (image, title, addr, desc) => {
        var newFave=[];
        // console.log(image + title + addr + desc);
        newFave = {
            // id bayad bashe inja chon API firebase estefade kardam nist
                image: image,
                title: title,
                address: addr,
                description: desc
            };
            CheckRepeatedFavItem(newFave,title);
            console.log(CheckRepeatedFavItemBOOLEAN);
      if(!CheckRepeatedFavItemBOOLEAN)  {
            AddToTotalFaves();
            UpdateFaveList(newFave);
        }else{
            deleteFromTotalFaves();
            deleteFromFaveList(newFave,title);
            
         
        }
       

    }

    // arraye baraye bare aval update nemishod, bara hamun useefffect gozashtam 
    useEffect(()=>{
        console.log(JSON.stringify(FavoritesList) );
        console.log(totalFavorites);
    },[FavoritesList])

    return (
        <li className={classes.item} >
            <img className={classes.image} src={props.item.image} alt={props.item.title}></img>
            <div className={classes.content} >
                <h3>{props.item.title} </h3>
                <address>{props.item.address} </address>
                <p>{props.item.description} </p>
                <h2>{props.key}</h2>
            </div>
            <div className={classes.actions}>
                <button onClick={() => AddToFavoritesHandler(props.item.image, props.item.title, props.item.address, props.item.description)}>to Favorites</button>
            </div>
        </li>
    )
}

export default MeetupItem;