// Pages
import {
    AppBar,
    Autocomplete,
    Avatars,
    BackendError,
    Badges,
    Blank,
    ButtonNavigation,
    Buttons,
    Calendar,
    Cards,
    Charts,
    Chat,
    Chips,
    Detail,
    Dialogs,
    Dividers,
    Drawers,
    Editor,
    ExpansionPanels,
    Google,
    GridList,
    Home,
    Invoice,
    Leaflet,
    Lists,
    Lockscreen,
    Media,
    Menus,
    Messages,
    NotFound,
    Paper,
    PasswordReset,
    Pickers,
    PricingPage,
    Products,
    Progress,
    SelectionControls,
    Selects,
    Signin,
    Signup,
    Snackbars,
    Social,
    Steppers,
    Tables,
    Tabs,
    Taskboard,
    TextFields,
    TimelinePage,
    Tooltips,
    Widgets,
} from "./pages";

import AppsIcon from "@material-ui/icons/Apps";

import Login from "./pages/Login/Login";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import EqualizerIcon from "@material-ui/icons/Equalizer";
// Icons

import ExploreIcon from "@material-ui/icons/Explore";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import HomeIcon from "@mui/icons-material/Home";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import FaceIcon from "@material-ui/icons/Face";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import Looks3Icon from "@material-ui/icons/Looks3";
import Looks4Icon from "@material-ui/icons/Looks4";
import NavigationIcon from "@material-ui/icons/Navigation";
import PagesIcon from "@material-ui/icons/Pages";
import PersonIcon from "@material-ui/icons/Person";
import PhotoIcon from "@material-ui/icons/Photo";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";

//Admin

import UserList from "./screens/admin/userActiveList";
import UnActiveUserList from "./screens/admin/userUnactiveList";
import ForgotPassword from "./screens/admin/userForgotPassword";
import UserAdminRegistration from "./screens/admin/userRegistration";
//Incident Log

import IncidentLog from "./screens/incidentLog/Index";
import IncidentView from "./screens/incidentLog/incidentList/incidentList";
//MIS REport

import AllReportView from "./screens/misReport/misReport";
//Audit Log

import Catalog from "./screens/auditLog/log";

import StateView from "../src/screens/master/state/index.js";
import DistrictView from "../src/screens/master/district/index.js";
import BlockView from "../src/screens/master/block/index.js";
import VillageView from "../src/screens/master/village/index.js";
import PanchayatView from "../src/screens/master/panchayat/index.js";
import PoliceStationView from "../src/screens/master/policeStation/index.js";

import User from "../src/screens/admin/UAM/User/User";
import Role from "../src/screens/admin/UAM/Role/Role";

import TopicIcon from '@mui/icons-material/Topic';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import AccountBoxIcon from '@mui/icons-material/AccountBox';



import IncidentVictims from "./screens/incidentLog/incidentCreate/Victim/IncidentVictims";
import IncidentComplaints from "./screens/incidentLog/incidentCreate/Complaints/IncidentComplaints";
import IncidentLegal from "./screens/incidentLog/incidentCreate/Legal/IncidentLegal";
import IncidentReintegration from "./screens/incidentLog/incidentCreate/Reintegeration/IncidentReintegration";
import IncidentMHPSS from "./screens/incidentLog/incidentCreate/MHPSS/IncidentMHPSS";
import Profile from "./screens/profile/Profile";




export default {
    items: [
        {
            path: "/home",
            name: "Home",
            type: "link",
            icon: HomeIcon,
            component: Home,
        },
        {
            path: "/home/viewIncidentLog",
            name: "viewIncidentLog",
            type: "link",
            icon: HomeIcon,
            component: IncidentLog,
        },
        {
            path: "/home/master",
            name: "Master",
            type: "submenu",
            icon: TopicIcon,
            children: [
                {
                    path: "/state",
                    name: "- State",
                    icon: ExploreIcon,
                    component: StateView,
                },
                {
                    path: "/district",
                    name: "- District",
                    icon: ExploreIcon,
                    component: DistrictView,
                },

                {
                    path: "/block",
                    name: "- Block",
                    icon: ExploreIcon,
                    component: BlockView,
                },
                {
                    path: "/panchayat",
                    name: "- Panchayat",
                    icon: ExploreIcon,
                    component: PanchayatView,
                },
                {
                    path: "/village",
                    name: "- Village",
                    icon: ExploreIcon,
                    component: VillageView,
                },

                {
                    path: "/police",
                    name: "- Police Station",
                    icon: ExploreIcon,
                    component: PoliceStationView,
                },
            ],
        },
        {
            path: "/home/uam",
            name: "UAM",
            type: "submenu",
            icon: PersonAddIcon,
            children: [
                {
                    path: "/user",
                    name: "- Users",
                    icon: ExploreIcon,
                    component: User,
                },
                {
                    path: "/role",
                    name: "- Role",
                    icon: ExploreIcon,
                    component: Role,
                },
            ],
        },
        {
            path: "/home/incident",
            name: "IncidentLog",
            type: "submenu",
            icon: NoteAddIcon,
            children: [
                {
                    path: "/incidentlist",
                    name: "- Incident List",
                    icon: ExploreIcon,
                    component: IncidentView,
                },
                {
                    path: "/incidentcreate",
                    name: "- Incident Creation",
                    icon: ExploreIcon,
                    component: IncidentLog,
                },

            ],
        },
        {
            path: "/home/allreport",
            name: "Report",
            type: "submenu",
            icon: EqualizerIcon,
            children: [
                {
                    path: "/report",
                    name: "- MIS Report",
                    icon: ExploreIcon,
                    component: AllReportView,
                },
            ],
        },
        {
            path: "/home/catelog",
            name: "Audit Log",
            type: "submenu",
            icon: PendingActionsIcon,
            children: [
                {
                    path: "/catelog",
                    name: "- Audit Log",
                    icon: PhotoIcon,
                    component: Catalog,
                },
            ],
        },
        {
            path: "/home/profile",
            name: "Profile",
            type: "link",
            icon: AccountBoxIcon,
            component: Profile,
        },


        ],
};
