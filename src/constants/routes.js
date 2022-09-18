import home from "../assets/images/icons/home.png";
import explore from "../assets/images/icons/explore.png"
import favorites from "../assets/images/icons/bookmark.png"
import direct from "../assets/images/icons/direct.png"
import reels from "../assets/images/icons/reels.png"
import stats from "../assets/images/icons/stats.png"
import settings from "../assets/images/icons/settings.png"
import logOut from "../assets/images/icons/logout.png"

export const leftsideMenuItems = [
    {
        path: "/feeds", name: "Feed", icon: {home}
    },
    {
        path: "/#", name: "Explore", icon: {explore}
    },
    {
        path: "/#", name: "My Favorites", icon: {favorites}
    },
    {
        path: "/#", name: "Direct", icon: {direct}
    },
    {
        path: "/#", name: "Reels", icon: {reels}
    },
    {
        path: "/#", name: "Stats", icon: {stats}
    },
    {
        path: "/#", name: "Settings", icon: {settings}
    },
    {
        path: "/feeds", name: "Log out", icon: {logOut}
    },
];