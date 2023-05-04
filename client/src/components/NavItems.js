import React from "react";
import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "About Us",
    path: "./about",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaInfo />,
  },
  {
    id: 3,
    title: "Services",
    path: "./services",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBriefcase />,
  },
  {
    id: 4,
    title: "Contact Us",
    path: "./contact",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaPhone />,
  },
];
