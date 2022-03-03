import "./Preview.scss";
import React from "react";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

import close from "../../assets/system_icons/close.svg";
import maximize from "../../assets/system_icons/maximize.svg";
import share from "../../assets/finder_icons/share.svg";
import edit from "../../assets/finder_icons/edit.svg";

import Grow from "@mui/material/Zoom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function Preview({ open, item, closeDialog }) {

  
  return (
    <div>      
      <Dialog
        open={open}
        hideBackdrop= {true}     
        PaperComponent={PaperComponent}    
        TransitionComponent={Transition}
        PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',                
            },            
          }}          
        aria-labelledby="draggable-dialog-title"        
      >
        <div className="dialog-body">
          <div className="dialog-appbar" id="draggable-dialog-title">
            <div className="control-buttons ">
              <div className="control-button control-close" onClick={closeDialog}>
                <img src={close} alt="Close" />
              </div>
              <div className="control-button control-maximize">
                <img src={maximize} alt="Maximixe" />
              </div>
            </div>
            <div className="right-align">
              <img className="dialog-appbar-icon" src={edit} alt="" />
              <img className="dialog-appbar-icon" src={share} alt="" />              
              <span className="dialog-appbar-button">Open with Preview</span>
            </div>
          </div>
          <div className="dialog-content">
              <img src={item.fileIcon} alt="" />
          </div>
        </div>
      </Dialog>      
    </div>
  );
}
