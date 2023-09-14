import { MdDraw, MdGroupWork, MdLibraryMusic, MdLocalActivity, MdSportsBaseball, MdSportsCricket, MdTravelExplore } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GiConsoleController } from "react-icons/gi";

const getDayName=(dateStr, locale="en-EN")=>
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

const interests = {
    SPORTS:{
        name:'Sports',
        icon:<MdSportsBaseball/>
    },
    TRAVEL:{
        name:'Travel',
        icon:<MdTravelExplore/>
    },
    TECHNOLOGY:{
        name:'Technology',
        icon:<GrTechnology/>
    },
    ART:{
        name:'Art',
        icon:<MdDraw/>
    },
    OUTDOOR:{
        name:'Outdoor Activities',
        icon:<MdSportsCricket/>
    },
    CLUBS:{
        name:'Clubs And Social Activities',
        icon:<MdLocalActivity/>
    },
    VOLUNTEER:{
        name:'Volunteer Work',
        icon:<MdGroupWork/>
    },
    GAMES:{
        name:'Video Games',
        icon:<GiConsoleController/>
    },
    MUSIC:{
        name:'Music',
        icon:<MdLibraryMusic/>
    },
}


export {getDayName,interests};