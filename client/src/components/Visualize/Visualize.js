import HelpIcon from "@mui/icons-material/Help";
import React, { useRef } from "react";
import BarChart2 from "../Chart/BarChart2";
import BarCharts from "../Chart/BarCharts";
import ScatterChart from "../Chart/ScatterCharts";
import DropdownButtons from "../UI/DropdownButtons";
import classes from "./Visualize.module.css";
import VisualizeButtons from "./VisualizeButtons";
import GraphCard from "../UI/GraphCard";

const graphData = [
  {
    id: 1,
    type: "defect 1",
    value: 20,
  },
  {
    id: 2,
    type: "defect 2",
    value: 10,
  },
  {
    id: 3,
    type: "defect 3",
    value: 30,
  },
];

const Visualize = () => {
  const scatterRef = useRef();
  return (
    <div className={classes.visualize}>
      <div className={classes.visualizeHeader}>
        <h2>Visualization</h2>
        <div className={classes.buttonContainer}>
          <DropdownButtons
            name="Plant"
            actions={["Plant 1", "Plant 2", "Plant 3"]}
          />
          <DropdownButtons
            name="Line"
            actions={["Line 1", "Line 2", "Line 3"]}
          />
          <DropdownButtons
            name="Device"
            actions={["Device 1", "Device 2", "Device 3"]}
          />
          <HelpIcon
            style={{ color: "#114A62", margin: "0 15px", fontSize: "2.2rem" }}
          />
        </div>
      </div>
      <div className={classes.visualizeContainer}>
        <div className={classes.row}>
          <div className={classes.graphContainer}>
            <h3>Defect view</h3>
            <ScatterChart ref={scatterRef} />
            <div className={classes.visualizeButtonContainer}>
              <VisualizeButtons forwardRef={scatterRef} />
            </div>
          </div>
          <div className={classes.graphContainer}>
            <h3>Defect view per shift</h3>
            <BarCharts />
            <div className={classes.visualizeButtonContainer}>
              <VisualizeButtons />
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.graphContainer}>
            <h3>Parts Inspected</h3>
            <BarChart2 />
            <div className={classes.visualizeButtonContainer}>
              <VisualizeButtons />
            </div>
          </div>
          <div className={classes.graphContainer}>
            <h3>Total Parts Inspected</h3>
            <div className={classes.totalParts}>100</div>
            <div>
              <span>Cumulative</span>
              <span>
                <label className={classes.switch}>
                  <input type="checkbox" />
                  <span className={`${classes.slider} ${classes.round}`}></span>
                </label>
              </span>
              <span>Shift</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={classes.visualizeContainer}>
        <div className={classes.row}>
          <GraphCard>
            <h3>Defect view</h3>
            <ScatterChart ref={scatterRef} />
            <div className={classes.visualizeButtonContainer}>
              <VisualizeButtons forwardRef={scatterRef} />
            </div>
          </GraphCard>

          <GraphCard>
            <h3>Defect view per shift</h3>
            <BarCharts />
            <div className={classes.visualizeButtonContainer}>
              <VisualizeButtons />
            </div>
          </GraphCard>
        </div>
        <div className={classes.row}>
          <GraphCard>
            <h3>Parts Inspected</h3>
            <BarChart2 />
            <div className={classes.visualizeButtonContainer}>
              <VisualizeButtons />
            </div>
          </GraphCard>
          <GraphCard>
            <h3>Total Parts Inspected</h3>
            <div className={classes.totalParts}>100</div>
            <div>
              <span>Cumulative</span>
              <span>
                <label className={classes.switch}>
                  <input type="checkbox" />
                  <span className={`${classes.slider} ${classes.round}`}></span>
                </label>
              </span>
              <span>Shift</span>
            </div>
          </GraphCard>
        </div>
      </div> */}
    </div>
  );
};

export default Visualize;
