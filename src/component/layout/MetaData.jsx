import React from "react";
import { Helmet } from "react-helmet";

function MetaData({title}) {
  return (
    <Helmet>
      <title>{`${title}-MultiShop`}</title>
      {/* <title>{title}</title> */}
    </Helmet>
  );
}

export default MetaData;
