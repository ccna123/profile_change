import React from "react";

export const DisplayAlapaca = ({
  accessories,
  changeAccessory,
  updateStyle,
}) => {
  console.log(updateStyle);
  return (
    <div>
      {/* hair */}
      <img
        src={
          changeAccessory === 0 || updateStyle[changeAccessory].style === ""
            ? require("../hair/default.png")
            : `../hair/${updateStyle[changeAccessory].style}`
        }
        className="absolute -left-3 z-10"
      />
      {/* end hair */}

      {/* ears */}
      <img
        src={
          changeAccessory === 1
            ? updateStyle[changeAccessory].style === ""
              ? accessories[1].styles[0].img_url
              : updateStyle[changeAccessory].style
            : accessories[1].styles[0].img_url
        }
        className="absolute"
      />
      {/* end ears */}

      {/* eyes */}
      <img
        src={accessories[2].styles[0].img_url}
        className="absolute -left-3 z-10"
      />
      {/* end eyes */}

      {/* mouth */}
      <img
        src={accessories[3].styles[0].img_url}
        className="absolute -left-3 z-10"
      />
      {/* end mouth */}

      {/* neck */}
      <img
        src={accessories[4].styles[0].img_url}
        className="absolute -left-3"
      />
      {/* end neck */}

      <img src={require("../nose/nose.png")} className="absolute -left-3" />

      {/* leg */}
      <img
        src={accessories[5].styles[0].img_url}
        className="absolute -left-3"
      />
      {/* end leg */}

      {/* accessories */}
      <img
        src={accessories[6].styles[0].img_url}
        className="absolute -left-3"
      />
      {/* end accessories */}
    </div>
  );
};
