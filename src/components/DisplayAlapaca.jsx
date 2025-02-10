import React from "react";

export const DisplayAlapaca = ({ updateStyle }) => {
  return (
    <div id="profile">
      {/* hair */}
      <img
        alt=""
        src={updateStyle[0].style}
        className="absolute -left-3 z-10"
      />
      {/* end hair */}

      {/* ears */}
      <img alt="" src={updateStyle[1].style} className="absolute z-10" />
      {/* end ears */}

      {/* eyes */}
      <img
        alt=""
        src={updateStyle[2].style}
        className="absolute -left-3 z-20"
      />
      {/* end eyes */}

      {/* mouth */}
      <img
        alt=""
        src={updateStyle[3].style}
        className="absolute -left-3 z-20"
      />
      {/* end mouth */}

      {/* neck */}
      <img
        alt=""
        src={updateStyle[4].style}
        className="absolute -left-3 z-10"
      />
      {/* end neck */}

      <img
        alt=""
        src="/images/nose/nose.png"
        className="absolute -left-3 z-10"
      />

      {/* leg */}
      <img
        alt=""
        src={updateStyle[5].style}
        className="absolute -left-3 z-10"
      />
      {/* end leg */}

      {/* accessories */}
      <img alt="" src={updateStyle[6].style} className="absolute z-10" />
      {/* end accessories */}

      {/* background */}
      <img alt="" src={updateStyle[7].style} className="absolute" />
      {/* end background */}
    </div>
  );
};
