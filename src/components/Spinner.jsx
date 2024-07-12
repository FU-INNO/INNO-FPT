import React, { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { PropagateLoader, RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;

const Spinner = () => {
  let [leading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <div>
      <RingLoader color="#ffffff" loading={leading} css={override} size={100} />
    </div>
  );
};

export default Spinner;
