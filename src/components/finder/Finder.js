import "./Finder.scss";
import * as React from "react";
import { useState } from "react";
import Draggable from "react-draggable";
import home from "../../assets/system_icons/home.svg";
import desktop from "../../assets/system_icons/desktop.svg";
import document from "../../assets/system_icons/document.svg";
import download from "../../assets/system_icons/download.svg";
import movie from "../../assets/system_icons/movie.svg";
import music from "../../assets/system_icons/music.svg";
import picture from "../../assets/system_icons/picture.svg";
import cloud from "../../assets/system_icons/cloud.svg";
import shared from "../../assets/system_icons/shared.svg";

import close from "../../assets/system_icons/close.svg";
import maximize from "../../assets/system_icons/maximize.svg";
import minimize from "../../assets/system_icons/minimize.svg";

import chevron_left from "../../assets/finder_icons/chevron_left.svg";
import chevron_right from "../../assets/finder_icons/chevron_right.svg";
import grid_view from "../../assets/finder_icons/grid_view.svg";
import group_by from "../../assets/finder_icons/group_by.svg";
import share from "../../assets/finder_icons/share.svg";
import tag from "../../assets/finder_icons/tag.svg";
import tasks from "../../assets/finder_icons/tasks.svg";
import search from "../../assets/finder_icons/search.svg";

import folder from "../../assets/finder_icons/folder.png";
import img1 from "../../assets/finder_icons/img1.jpeg";
import img3 from "../../assets/finder_icons/image3.jpeg";
import bg2 from "../../assets/wallpapers/bg2.jpg"

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Preview from "../preview/Preview";

const downloadFinderItems = {
  directoryName: "Downloads",
  items: [
    { fileName: "Portfolio", fileIcon: folder },
    { fileName: "Notes", fileIcon: folder },
    { fileName: "Travel", fileIcon: folder },
    { fileName: "Wallpaper.jpg", fileIcon: img1 },
  ],
};
const desktopFinderItems = {
  directoryName: "Desktop",
  items: [
    { fileName: "Desktop", fileIcon: folder },
    { fileName: "Personal", fileIcon: folder },
    { fileName: "Profile.png", fileIcon: img1 },
  ],
};
const documentsFinderItems = {
  directoryName: "Documents",
  items: [{ fileName: "Travel", fileIcon: folder }],
};
const moviesFinderItems = {
  directoryName: "Movies",
  items: [],
};
const musicFinderItems = {
  directoryName: "Music",
  items: [],
};
const picturesFinderItems = {
  directoryName: "Pictures",
  items: [
    { fileName: "pic 1", fileIcon: img1 },
    { fileName: "pic 2", fileIcon: bg2 },
    { fileName: "pic 3", fileIcon: img3 }
  ],
};
const homeFinderItems = {
  directoryName: "Akshat",
  items: [],
};

const navigationMenuItemsFavourites = [
  { text: "Akshat", img: home, directory: homeFinderItems },
  { text: "Desktop", img: desktop, directory: desktopFinderItems },
  { text: "Documents", img: document, directory: documentsFinderItems },
  { text: "Downloads", img: download, directory: downloadFinderItems },
  { text: "Movies", img: movie, directory: moviesFinderItems },
  { text: "Music", img: music, directory: musicFinderItems },
  { text: "Pictures", img: picture, directory: picturesFinderItems },
];

const navigationMenuItemsCloud = [
  { text: "iCloud Drive", img: cloud },
  { text: "Shared", img: shared },
];

function Finder({isAppOpen, changeAppsStatus}) {

  const [activeDirectory, setActiveDirectory] = useState(downloadFinderItems);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewItem, setPreviewItem] = useState('');  

  function preview(event, item){
    if(event.keyCode === 32){
      setPreviewOpen(true)
      setPreviewItem(item)
      event.preventDefault()
    }
  }

  function previewClose(event){
    if(event.keyCode === 32 && previewOpen){
      setPreviewOpen(false)
    }
  }

  const handlePreviewCloseClick = () => {
    setPreviewOpen(false)
  };

  return (        
    <Draggable handle=".draggable-handle" defaultPosition={{x: -400, y: -250}}>
      <div onKeyDown={(e) => previewClose(e)} tabIndex="14" className={`finder-container ${!isAppOpen ? 'minimize-animation': ''}`}>
      <Preview open={previewOpen} item={previewItem} closeDialog={handlePreviewCloseClick}/> 
        <div className="finder-navigation-menu">
          <div className="control-buttons draggable-handle">
            <div className="control-button control-close" onClick={(e) => changeAppsStatus('finder', false)}>
              <img src={close} alt="Close" />
            </div>
            <div className="control-button control-minimize">
              <img src={minimize} alt="Minimaize" />
            </div>
            <div className="control-button control-maximize">
              <img src={maximize} alt="Maximixe" />
            </div>
          </div>
          <div className="navigation-items">
            <span className="navigation-type">Favourites</span>

            {navigationMenuItemsFavourites.map((item, i) => (
              <div
                className={
                  "navigation-item " +
                  (item.directory === activeDirectory
                    ? "navigation-active"
                    : "")
                }
                key={i}
                onClick={() => setActiveDirectory(item.directory)}
              >
                <img className="navigation-item-img" src={item.img} alt="" />
                <span className="navigation-item-text">{item.text}</span>
              </div>
            ))}

            <br />
            <span className="navigation-type">iCloud</span>
            {navigationMenuItemsCloud.map((item, i) => (
              <div className="navigation-item" key={i}>
                <img className="navigation-item-img" src={item.img} alt="" />
                <span className="navigation-item-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="finder-body">
          <div className="finder-appbar draggable-handle">
            <img className="finder-appbar-icon" src={chevron_left} alt="" />
            <img className="finder-appbar-icon" src={chevron_right} alt="" />
            <span className="finder-location">
              {activeDirectory.directoryName}
            </span>
            <div className="right-align">
              <img className="finder-appbar-icon" src={grid_view} alt="" />
              <span className="margin-space" />
              <img className="finder-appbar-icon" src={group_by} alt="" />
              <img className="finder-appbar-icon" src={share} alt="" />
              <img className="finder-appbar-icon" src={tag} alt="" />
              <img className="finder-appbar-icon" src={tasks} alt="" />
              <span className="margin-space" />
              <img className="finder-appbar-icon" src={search} alt="" />
            </div>
          </div>

          <div className="finder-files">
            <ImageList cols={6} gap={20}>
              {activeDirectory.items.map((item, index) => (
                <div className="finder-file-item" tabIndex={index} onKeyDown={(e) => preview(e, item)} key={index}>
                  <ImageListItem>
                    <img
                      className="finder-file-img"
                      src={item.fileIcon}
                      alt=""
                      loading="lazy"
                    />
                    <ImageListItemBar
                      className="finder-file-title"
                      subtitle={item.fileName}
                      position="below"
                      style={{ fontSize: "0.3rem", wordWrap: "break-word" }}
                      sx={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: "4px",
                      }}
                    />
                  </ImageListItem>
                </div>
              ))}
            </ImageList>            
          </div>
        </div>        
      </div>
    </Draggable>        
  );
}

export default Finder;
