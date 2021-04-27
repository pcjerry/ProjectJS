/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import LocalOffer from "@material-ui/icons/LocalOffer";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import PricePage from "views/Price/Price";



const dashboardRoutes = [
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "History",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/price",
    name: "Price",
    icon: LocalOffer,
    component: PricePage,
    layout: "/admin"
  },
  {
    path: "/FAQ",
    name: "FAQ",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
];

export default dashboardRoutes;

/*
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
 */