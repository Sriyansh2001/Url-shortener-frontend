import React from "react";
import useSmothText from "../../hooks/useSmothText";

export default function RunningText({ HEADING_LIST }) {
  const { heading } = useSmothText({ HEADING_LIST });
  return <>{heading}</>;
}
