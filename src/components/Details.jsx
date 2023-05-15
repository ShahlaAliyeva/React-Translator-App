import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useViewport } from "react-viewport-hooks";

function Details({ speak, input, output, languageSwitcher, translate }) {
  // const CopiedIcon = `../Icon/copy-outline.svg`
  const { vw } = useViewport();

  let layout = "compView";
  if (vw < 725) {
    layout = "phoneView";
  }

  const notify = () => {
    toast.success("Text copied to clipboard successfully", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // icon: "../Icon/copy-outline.svg"
    });
  };

  return (
    <div className="details">
      {input ? (
        <div className="source-side">
          <ion-icon
            name="volume-medium"
            onClick={() => speak({ text: input })}
          ></ion-icon>
        </div>
      ) : (
        <div className="invisible">
          <ion-icon
            name="volume-medium"
            onClick={() => speak({ text: input })}
          ></ion-icon>
        </div>
      )}

      {layout === "compView" ? (
        <ion-icon
          name="swap-horizontal-outline"
          onClick={(event) => {
            languageSwitcher();
          }}
        ></ion-icon>
      ) : (
        <ion-icon
          name="swap-vertical-outline"
          onClick={(event) => {
            languageSwitcher();
          }}
        ></ion-icon>
      )}

      {output ? (
        <div className="to-side">
          <ion-icon
            name="volume-medium"
            onClick={() => speak({ text: output })}
          ></ion-icon>
          <CopyToClipboard text={output}>
            <ion-icon name="copy-outline" onClick={notify}></ion-icon>
          </CopyToClipboard>
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            // pauseOnFocusLoss
            draggable
            // pauseOnHover
            theme="light"
          />
        </div>
      ) : (
        <div className="invisible">
          <ion-icon
            name="volume-medium"
            onClick={() => speak({ text: output })}
          ></ion-icon>
          <ion-icon name="copy-outline"></ion-icon>
        </div>
      )}
    </div>
  );
}

export default Details;
