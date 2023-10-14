import React from "react";

export const DisplayAlapaca = ({ updateStyle, alapacaImg }) => {
  return (
    <div id="profile" ref={alapacaImg}>
      {/* hair */}
      <img src={updateStyle[0].style} className="absolute -left-3 z-10" />
      {/* end hair */}

      {/* ears */}
      <img src={updateStyle[1].style} className="absolute z-10" />
      {/* end ears */}

      {/* eyes */}
      <img src={updateStyle[2].style} className="absolute -left-3 z-20" />
      {/* end eyes */}

      {/* mouth */}
      <img src={updateStyle[3].style} className="absolute -left-3 z-20" />
      {/* end mouth */}

      {/* neck */}
      <img src={updateStyle[4].style} className="absolute -left-3 z-10" />
      {/* end neck */}

      <img src="/images/nose/nose.png" className="absolute -left-3 z-10" />

      {/* leg */}
      <img src={updateStyle[5].style} className="absolute -left-3 z-10" />
      {/* end leg */}

      {/* accessories */}
      <img src={updateStyle[6].style} className="absolute z-10" />
      {/* end accessories */}

      {/* background */}
      <img src={updateStyle[7].style} className="absolute" />
      {/* end background */}
    </div>
  );
};
