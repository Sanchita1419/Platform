import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import RefreshIcon from "@mui/icons-material/Refresh";
import classes from "./VisualizeButtons.module.css";
import exportComponentAsJPEG from "react-component-export-image";

const VisualizeButtons = (props) => {
  const componentToExport = props.export;
  return (
    <div className={classes.visualizeButtons}>
      <button onClick={() => exportComponentAsJPEG(componentToExport)}>
        <DownloadIcon style={{ width: "20px", height: "20px" }} />
      </button>
      <button>
        <PrintIcon style={{ width: "20px", height: "20px" }} />
      </button>
      <button>
        <ShareIcon style={{ width: "20px", height: "20px" }} />
      </button>
      <button>
        <RefreshIcon style={{ width: "20px", height: "20px" }} />
      </button>
    </div>
  );
};

export default VisualizeButtons;
