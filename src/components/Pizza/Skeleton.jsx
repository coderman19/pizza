import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={600}
    height={500}
    viewBox="0 0 600 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="161" cy="116" r="95" /> 
    <rect x="67" y="347" rx="0" ry="0" width="77" height="25" /> 
    <rect x="181" y="347" rx="0" ry="0" width="80" height="25" /> 
    <rect x="66" y="257" rx="0" ry="0" width="196" height="72" /> 
    <rect x="113" y="228" rx="0" ry="0" width="98" height="12" />
  </ContentLoader>
)

export default Skeleton;