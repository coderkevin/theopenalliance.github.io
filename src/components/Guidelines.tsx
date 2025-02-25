import React from "react";

export default function Guidelines(): JSX.Element {
  const guidelines: (JSX.Element | String)[] = [
    "Open Alliance teams don't keep secrets.",
    "Open Alliance teams do their best to share updates at least once a week.",
    "Open Alliance teams primarily post updates to ChiefDelphi.",
    "Open Alliance teams provide open CAD and/or open code.",
    "Open Alliance teams include the bad with the good.",
    "Open Alliance teams join to help everyone - not just other Open Alliance teams.",
  ];

  return (
    <>
      {guidelines.map((gl, idx) => (
        <div>
          {idx + 1}. {gl}
        </div>
      ))}
    </>
  );
}
