import React from "react";
import GoogleFontLoader from "react-google-font-loader";

const Error = ({ err }) => {
  if (!err)
    return (
      <>
        <GoogleFontLoader
          fonts={[
            {
              font: "IM Fell DW Pica SC",
              weights: [400, "400i"]
            }
          ]}
        />
        <h2
          className="center"
          style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
        >
          404
        </h2>
        <h2
          className="center"
          style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
        >
          Oops, not found!
        </h2>
      </>
    );
  return (
    <div className="center">
      <GoogleFontLoader
        fonts={[
          {
            font: "IM Fell DW Pica SC",
            weights: [400, "400i"]
          }
        ]}
      />
      <h2 style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}>
        {err.errCode}
      </h2>
      <h2 style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}>
        {err.errMessage}
      </h2>
    </div>
  );
};

export default Error;
