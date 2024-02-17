import React from 'react';
import {
    Route,
    Routes
} from 'react-router-dom';

// ----------- Pages Imports ---------------
import Analytics from './Dashboards/Analytics';
import ProjectsDashboard from './Dashboards/Projects';
import System from './Dashboards/System';
import Monitor from './Dashboards/Monitor'; 
import Financial from './Dashboards/Financial';
import Stock from './Dashboards/Stock';
import Reports from './Dashboards/Reports';

import Widgets from './Widgets';

import Cards from './Cards/Cards';
import CardsHeaders from './Cards/CardsHeaders';

import NavbarOnly from './Layouts/NavbarOnly';
import SidebarDefault from './Layouts/SidebarDefault';
import SidebarA from './Layouts/SidebarA';
import DragAndDropLayout from './Layouts/DragAndDropLayout';
import SidebarWithNavbar from './Layouts/SidebarWithNavbar';

import Accordions from './Interface/Accordions';
import Alerts from './Interface/Alerts';
import Avatars from './Interface/Avatars';
import BadgesLabels from './Interface/BadgesLabels';
import Breadcrumbs from './Interface/Breadcrumbs';
import Buttons from './Interface/Buttons';
import Colors from './Interface/Colors';
import Dropdowns from './Interface/Dropdowns';
import Images from './Interface/Images';
import ListGroups from './Interface/ListGroups';
import MediaObjects from './Interface/MediaObjects';
import Modals from './Interface/Modals';
import Navbars from './Interface/Navbars';
import Paginations from './Interface/Paginations';
import ProgressBars from './Interface/ProgressBars';
import TabsPills from './Interface/TabsPills';
import TooltipPopovers from './Interface/TooltipsPopovers';
import Typography from './Interface/Typography';
import Notifications from './Interface/Notifications';
import CropImage from './Interface/CropImage';
import DragAndDropElements from './Interface/DragAndDropElements';
import Calendar from './Interface/Calendar';
import ReCharts from './Graphs/ReCharts';

import Forms from './Forms/Forms';
import FormsLayouts from './Forms/FormsLayouts';
import InputGroups from './Forms/InputGroups';
import Wizard from './Forms/Wizard';
import TextMask from './Forms/TextMask';
import Typeahead from './Forms/Typeahead';
import Toggles from './Forms/Toggles';
import Editor from './Forms/Editor';
import DatePicker from './Forms/DatePicker';
import Dropzone from './Forms/Dropzone';
import Sliders from './Forms/Sliders';

import Tables from './Tables/Tables';
import ExtendedTable from './Tables/ExtendedTable';
import AgGrid from './Tables/AgGrid';

import AccountEdit from './Apps/AccountEdit';
import BillingEdit from './Apps/BillingEdit';
import Chat from './Apps/Chat';
import Clients from './Apps/Clients';
import EmailDetails from './Apps/EmailDetails';
import Files from './Apps/Files';
import GalleryGrid from './Apps/GalleryGrid';
import GalleryTable from './Apps/GalleryTable';
import ImagesResults from './Apps/ImagesResults';
import Inbox from './Apps/Inbox';
import NewEmail from './Apps/NewEmail';
import ProfileDetails from './Apps/ProfileDetails';
import ProfileEdit from './Apps/ProfileEdit';
import Projects from './Apps/Projects';
import SearchResults from './Apps/SearchResults';
import SessionsEdit from './Apps/SessionsEdit';
import SettingsEdit from './Apps/SettingsEdit';
import Tasks from './Apps/Tasks';
import TasksDetails from './Apps/TasksDetails';
import TasksKanban from './Apps/TasksKanban';
import Users from './Apps/Users';
import UsersResults from './Apps/UsersResults';
import VideosResults from './Apps/VideosResults';

import ComingSoon from './Pages/ComingSoon';
import Confirmation from './Pages/Confirmation';
import Danger from './Pages/Danger';
import Error404 from './Pages/Error404';
import ForgotPassword from './Pages/ForgotPassword';
import LockScreen from './Pages/LockScreen';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Success from './Pages/Success';
import Timeline from './Pages/Timeline';

import Icons from './Icons';

// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

import { SidebarANavbar } from './../layout/components/SidebarANavbar';
import { SidebarASidebar } from './../layout/components/SidebarASidebar';


// --- New Routes added by Sinatra Gunda starting from 15/02/2024 

import LoginContainer from './../containers/login/LoginContainer';
import { HomeContainer } from '../containers/home';
import AuthentificationGuard from '../containers/authentification/AuthentificationGuard';

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Routes>
            <Route path="" element = {<AuthentificationGuard/>}>
                <Route path="/home" exact element = {<HomeContainer/>} />
                <Route path="/dashboards/analytics" exact element={Analytics} />
                <Route path="/dashboards/projects" exact element={ProjectsDashboard} />
                <Route path="/dashboards/system" exact element={System} />
                <Route path="/dashboards/monitor" exact element={Monitor} />
                <Route path="/dashboards/financial" exact element={Financial} />
                <Route path="/dashboards/stock" exact element={Stock} />
                <Route path="/dashboards/reports" exact element={Reports} />

                <Route path='/widgets' exact element={Widgets} />
                
                { /*    Cards Routes     */ }
                <Route path='/cards/cards' exact element={Cards} />
                <Route path='/cards/cardsheaders' exact element={CardsHeaders} />
                
                { /*    Layouts     */ }
                <Route path='/layouts/navbar' element={NavbarOnly} />
                <Route path='/layouts/sidebar' element={SidebarDefault} />
                <Route path='/layouts/sidebar-a' element={SidebarA} />
                <Route path="/layouts/sidebar-with-navbar" element={SidebarWithNavbar} />
                <Route path='/layouts/dnd-layout' element={DragAndDropLayout} />

                { /*    Interface Routes   */ }
                <Route element={ Accordions } path="/interface/accordions" />
                <Route element={ Alerts } path="/interface/alerts" />
                <Route element={ Avatars } path="/interface/avatars" />
                <Route element={ BadgesLabels } path="/interface/badges-and-labels" />
                <Route element={ Breadcrumbs } path="/interface/breadcrumbs" />
                <Route element={ Buttons } path="/interface/buttons" />
                <Route element={ Colors } path="/interface/colors" />
                <Route element={ Dropdowns } path="/interface/dropdowns" />
                <Route element={ Images } path="/interface/images" />
                <Route element={ ListGroups } path="/interface/list-groups" />
                <Route element={ MediaObjects } path="/interface/media-objects" />
                <Route element={ Modals } path="/interface/modals" />
                <Route element={ Navbars } path="/interface/navbars" />
                <Route element={ Paginations } path="/interface/paginations" />
                <Route element={ ProgressBars } path="/interface/progress-bars" />
                <Route element={ TabsPills } path="/interface/tabs-pills" />
                <Route element={ TooltipPopovers } path="/interface/tooltips-and-popovers" />
                <Route element={ Typography } path="/interface/typography" />
                <Route element={ Notifications } path="/interface/notifications" />
                <Route element={ CropImage } path="/interface/crop-image" />
                <Route element={ DragAndDropElements } path="/interface/drag-and-drop-elements" />
                <Route element={ Calendar } path="/interface/calendar" />

                { /*    Forms Routes    */ }
                <Route element={ Forms } path="/forms/forms" />
                <Route element={ FormsLayouts } path="/forms/forms-layouts" />
                <Route element={ InputGroups } path="/forms/input-groups" />
                <Route element={ Wizard } path="/forms/wizard" />
                <Route element={ TextMask } path="/forms/text-mask" />
                <Route element={ Typeahead } path="/forms/typeahead" />
                <Route element={ Toggles } path="/forms/toggles" />
                <Route element={ Editor } path="/forms/editor" />
                <Route element={ DatePicker } path="/forms/date-picker" />
                <Route element={ Dropzone } path="/forms/dropzone" />
                <Route element={ Sliders } path="/forms/sliders" />
                
                { /*    Graphs Routes   */ }
                <Route element={ ReCharts } path="/graphs/re-charts" />

                { /*    Tables Routes   */ }
                <Route element={ Tables } path="/tables/tables" />
                <Route element={ ExtendedTable } path="/tables/extended-table" />
                <Route element={ AgGrid } path="/tables/ag-grid" />

                { /*    Apps Routes     */ }
                <Route element={ AccountEdit } path="/apps/account-edit" />
                <Route element={ BillingEdit } path="/apps/billing-edit" />
                <Route element={ Chat } path="/apps/chat" />
                <Route element={ Clients } path="/apps/clients" />
                <Route element={ EmailDetails } path="/apps/email-details" />
                <Route element={ Files } path="/apps/files/:type"/>
                <Route element={ GalleryGrid } path="/apps/gallery-grid" />
                <Route element={ GalleryTable } path="/apps/gallery-table" />
                <Route element={ ImagesResults } path="/apps/images-results" />
                <Route element={ Inbox } path="/apps/inbox" />
                <Route element={ NewEmail } path="/apps/new-email" />
                <Route element={ ProfileDetails } path="/apps/profile-details" />
                <Route element={ ProfileEdit } path="/apps/profile-edit" />
                <Route element={ Projects } path="/apps/projects/:type" />
                <Route element={ SearchResults } path="/apps/search-results" />
                <Route element={ SessionsEdit } path="/apps/sessions-edit" />
                <Route element={ SettingsEdit } path="/apps/settings-edit" />
                <Route element={ Tasks } path="/apps/tasks/:type" />
                <Route element={ TasksDetails } path="/apps/task-details" />
                <Route element={ TasksKanban } path="/apps/tasks-kanban" />
                <Route element={ Users } path="/apps/users/:type" />
                <Route element={ UsersResults } path="/apps/users-results" />
                <Route element={ VideosResults } path="/apps/videos-results" />

                { /*    Pages Routes    */ }
                <Route element={ ComingSoon } path="/pages/coming-soon" />
                <Route element={ Confirmation } path="/pages/confirmation" />
                <Route element={ Danger } path="/pages/danger" />
                <Route element={ Error404 } path="/pages/error-404" />
                <Route element={ ForgotPassword } path="/pages/forgot-password" />
                <Route element={ LockScreen } path="/pages/lock-screen" />
                
                <Route element={ LoginContainer } path="/login" />
                
                <Route element={ Register } path="/pages/register" />
                <Route element={ Success } path="/pages/success" />
                <Route element={ Timeline } path="/pages/timeline" />
                <Route path='/icons' exact element={Icons} />
            </Route>         
        </Routes>
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars  = () => (
    <Routes>
        { /* Other Navbars: */}
        <Route
            element={ <SidebarANavbar/> }
            path="/layouts/sidebar-a"
        />
        <Route
            element={ <NavbarOnly.Navbar/> }
            path="/layouts/navbar"
        />
        <Route
            element={ <SidebarWithNavbar.Navbar/> }
            path="/layouts/sidebar-with-navbar"
        />
        { /* Default Navbar: */}
        <Route
            path='/'
            element={ <DefaultNavbar/> }
        />
    </Routes>  
);

export const RoutedSidebars = () => (
    <Routes>
        { /* Other Sidebars: */}
        <Route
            element={ <SidebarASidebar/> }
            path="/layouts/sidebar-a"
        />
        <Route
            element={ <SidebarWithNavbar.Sidebar/> }
            path="/layouts/sidebar-with-navbar"
        />
        { /* Default Sidebar: */}
        <Route
            path='/'
            element={ <DefaultSidebar/> }
        />
    </Routes>
);
