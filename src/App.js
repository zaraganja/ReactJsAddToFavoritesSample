
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetUps from "./pages/AllMeetUps";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import W3YZ from "./pages/W3YZ";
import { FavContext } from "./store/Favorites-context";

// wiyh Routes , we say that only one page should be shown in the web page
function App() {

  const [FavoritesList, setFavoritesList] = useState([]);
  const [TotalFaves, setTotalFaves] = useState(1);
  const [CheckRepeatedFavItemBOOLEAN,setCheckRepeatedFavItemBOOLEAN]=useState(false);

  const FAVEDATA = {
    UpdateFaveList: (newFave) => {
      //concat is like push but returns a  new array!
      //setFavoritesList(FavoritesList.concat(newFave));
      setFavoritesList(FavoritesList=>[...FavoritesList,newFave]);
    },
    deleteFromTotalFaves: () => {
      setTotalFaves(FavoritesList.length,);
    },
    AddToTotalFaves: () => {
      setTotalFaves(FavoritesList.length);
    },
    CheckRepeatedFavItem:(newFavee,title)=>{  
     setCheckRepeatedFavItemBOOLEAN(FavoritesList.some(newFavee => newFavee.title === title));  
    },
    deleteFromFaveList:(newFave,title)=>{
    setFavoritesList(FavoritesList.filter(newFave => newFave.title !== title));
    },
    CheckRepeatedFavItemBOOLEAN:CheckRepeatedFavItemBOOLEAN,
    FavoritesList: FavoritesList,
    totalFavorites: TotalFaves
  }
  return (
    <div >
      <MainNavigation />
      <FavContext.Provider value={FAVEDATA}>
        <Routes>

          <Route path="/" element={<AllMeetUps />} >

          </Route>
          <Route path="/new-meetup" element={<NewMeetup />} >

          </Route>
          <Route path="/favorites" element={<Favorites />} >

          </Route>
          <Route path="/W3YZ" element={<W3YZ/>}></Route>

        </Routes>
      </FavContext.Provider>
    </div>
  );
}

export default App;
