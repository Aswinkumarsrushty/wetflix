import React, { useState } from "react";
import Styles from "./Index.module.css";
import QuickSetUpImage from "../../../assets/images/QuickSetUpImage.png";
import waterdrop from "../../../assets/videos/waterdrop.mp4";
import ADDCollasble from "../../../assets/images/ADDCollasble.png";
import CancelCollasble from "../../../assets/images/CancelCollasble.png";

const QuickSetupGuide = () => {
  const [open, setOpen] = useState(false);
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

  const handleOpenCloseTable = () => {
    if (open === false) {
      setOpen(true);
    }
    if (open === true) {
      setOpen(false);
    }
  };
  const handleOpenCloseTableOne = () => {
    if (openOne === false) {
      setOpenOne(true);
    }
    if (openOne === true) {
      setOpenOne(false);
    }
  };

  const handleOpenCloseTableTwo = () => {
    if (openTwo === false) {
      setOpenTwo(true);
    }
    if (openTwo === true) {
      setOpenTwo(false);
    }
  };
  const handleOpenCloseTableThree = () => {
    if (openThree === false) {
      setOpenThree(true);
    }
    if (openThree === true) {
      setOpenThree(false);
    }
  };

  return (
    <div className={Styles.QuickSetupGuideMainContainer}>
      <div className={Styles.QuickSetupGuideContainer}>
        <p className={Styles.QuickSetupGuideContainerText}>Quick setup guide</p>
        <div className={Styles.QuickSetupGuideContent}>
          <div className={Styles.QuickSetupGuideContentStepOne}>
            <p className={Styles.QuickSetupGuideContentStepText}>Step 1</p>
            <p className={Styles.QuickSetupGuideContentStepVulputate}>
              Amet sed nunc vulputate
            </p>
            <p className={Styles.QuickSetupGuideContentStepPharagrph}>
              Sagittis lacus sollicitudin est tincidunt ut rutrum nisi. Eget
              lectus semper vivamus aenean pellentesque eget nullam. Eget
              accumsan lacinia mauris urna diam.
            </p>
            <div className={Styles.QuickSetupGuideContentImageContent}>
              <img src={QuickSetUpImage} alt="" />
            </div>
          </div>
          <div className={Styles.QuickSetupGuideContentStepOne}>
            <p className={Styles.QuickSetupGuideContentStepText}>Step 2</p>
            <p className={Styles.QuickSetupGuideContentStepVulputate}>
              Amet sed nunc vulputate
            </p>
            <p className={Styles.QuickSetupGuideContentStepPharagrph}>
              Ultrices aliquam sit porttitor phasellus. Et ut enim purus
              tincidunt et pretium integer. Nunc volutpat nisi curabitur aliquam
              in in.
            </p>
            <div className={Styles.QuickSetupGuideContentImageContent}>
              <img src={QuickSetUpImage} alt="" />
            </div>
          </div>
          <div className={Styles.QuickSetupGuideContentStepOne}>
            <p className={Styles.QuickSetupGuideContentStepText}>Step 3</p>
            <p className={Styles.QuickSetupGuideContentStepVulputate}>
              Amet sed nunc vulputate
            </p>
            <p className={Styles.QuickSetupGuideContentStepPharagrph}>
              Viverra orci massa sed id quis ultricies lorem lorem. Tempus hac
              fermentum massa purus amet turpis consectetur. In eu cursus ipsum
              netus maecenas adipiscing.
            </p>
            <div className={Styles.QuickSetupGuideContentImageContent}>
              <img src={QuickSetUpImage} alt="" />
            </div>
          </div>
        </div>
        <div className={Styles.QuickSetupGuideVideAndQAContainer}>
          <div className={Styles.QuickSetUpVideo}>
            <video width="500" height="227" autoPlay>
              <source src={waterdrop} type="video/mp4" />
            </video>
            <p className={Styles.QuickSetUpVideoText}>
              Watch this quick video setup guide
            </p>
          </div>
          <div className={Styles.QuickSetUpFQAContainer}>
            <p className={Styles.QuickSetUpFQAContainerTitle}>
              FAQ (Frequently asked questions)
            </p>
            <div className={Styles.QuickSetUpFQAContent}>
              <div
                className={Styles.collapseTableContent}
                onClick={() => handleOpenCloseTable()}
              >
                <div className={Styles.collapseTableContentTitle} style={{backgroundColor: open === true ? "#E6EBF6":"#fff"}}>
                  <p className={Styles.collapseTableContentText}>
                    Nunc orci amet et fames quam amet a.
                  </p>{" "}
                  {open === false ? (
                    <img src={ADDCollasble} alt="" />
                  ) : (
                    <img src={CancelCollasble} alt="" />
                  )}
                </div>
                {open === true ? (
                  <p className={Styles.collapseTableContentContent}>
                    Lacus facilisis neque egestas felis nascetur imperdiet
                    sapien sollicitudin nibh. Ac felis ac porta consequat
                    pretium.{" "}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={Styles.QuickSetUpFQAContent}>
              <div
                className={Styles.collapseTableContent}
                onClick={() => handleOpenCloseTableOne()}
              >
                <div className={Styles.collapseTableContentTitle} style={{backgroundColor: openOne === true ? "#E6EBF6":"#fff"}}>
                  <p className={Styles.collapseTableContentText}>
                  Lectus sagittis aliquet integer ac ac tempus eu vitae.
                  </p>{" "}
                  {openOne === false ? (
                    <img src={ADDCollasble} alt="" />
                  ) : (
                    <img src={CancelCollasble} alt="" />
                  )}
                </div>
                {openOne === true ? (
                  <p className={Styles.collapseTableContentContent}>
                    Lacus facilisis neque egestas felis nascetur imperdiet
                    sapien sollicitudin nibh. Ac felis ac porta consequat
                    pretium.{" "}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={Styles.QuickSetUpFQAContent}>
              <div
                className={Styles.collapseTableContent}
                onClick={() => handleOpenCloseTableTwo()}
              >
                <div className={Styles.collapseTableContentTitle} style={{backgroundColor: openTwo === true ? "#E6EBF6":"#fff"}}>
                  <p className={Styles.collapseTableContentText}>
                  Sagittis venenatis pellentesque eu quam amet.
                  </p>{" "}
                  {openTwo === false ? (
                    <img src={ADDCollasble} alt="" />
                  ) : (
                    <img src={CancelCollasble} alt="" />
                  )}
                </div>
                {openTwo === true ? (
                  <p className={Styles.collapseTableContentContent}>
                    Lacus facilisis neque egestas felis nascetur imperdiet
                    sapien sollicitudin nibh. Ac felis ac porta consequat
                    pretium.{" "}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={Styles.QuickSetUpFQAContent}>
              <div
                className={Styles.collapseTableContent}
                onClick={() => handleOpenCloseTableThree()}
              >
                <div className={Styles.collapseTableContentTitle} style={{backgroundColor: openThree === true ? "#E6EBF6":"#fff"}}>
                  <p className={Styles.collapseTableContentText}>
                  A mi magna ultricies aenean leo sit.
                  </p>{" "}
                  {openThree === false ? (
                    <img src={ADDCollasble} alt="" />
                  ) : (
                    <img src={CancelCollasble} alt="" />
                  )}
                </div>
                {openThree === true ? (
                  <p className={Styles.collapseTableContentContent}>
                    Lacus facilisis neque egestas felis nascetur imperdiet
                    sapien sollicitudin nibh. Ac felis ac porta consequat
                    pretium.{" "}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuickSetupGuide;
