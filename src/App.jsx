import accessories from "./alapaca";
import "./App.css";
import { useState } from "react";
import { DisplayAlapaca } from "./components/DisplayAlapaca";
import html2canvas from "html2canvas";

const accessories_style = [
  { key: "Hair", style: accessories[0].styles[0].img_url },
  { key: "Ears", style: accessories[1].styles[0].img_url },
  { key: "Eyes", style: accessories[2].styles[0].img_url },
  { key: "Mouth", style: accessories[3].styles[0].img_url },
  { key: "Neck", style: accessories[4].styles[0].img_url },
  { key: "Leg", style: accessories[5].styles[0].img_url },
  { key: "Accessories", style: accessories[6].styles[0].img_url },
  { key: "Backgrounds", style: accessories[7].styles[0].img_url },
];
function App() {
  const [changeAccessory, setChangeAccessory] = useState(0);
  const [changeStyle, setChangeStyle] = useState(0);
  const [updateStyle, setUpdateStyle] = useState(accessories_style);

  const handleChangeAccessory = (index) => {
    setChangeAccessory(index);
    setChangeStyle(0);
  };

  const handleChangeStyle = (index) => {
    setChangeStyle(index);
    setUpdateStyle((prev) => {
      const newStyle = [...prev];
      newStyle[changeAccessory] = {
        key: accessories[changeAccessory].name,
        style: accessories[changeAccessory].styles[index].img_url,
      };

      return newStyle;
    });
  };

  const handleRandomStyle = () => {
    setUpdateStyle((prev) => {
      const randomStyle = prev.map((category, index) => {
        let randomIndex = Math.floor(
          Math.random() * accessories[index].styles.length
        );
        const randomStyle = accessories[index].styles[randomIndex].img_url;
        return { ...category, style: randomStyle };
      });

      return randomStyle;
    });
  };

  const handleDownload = () => {
    html2canvas(document.querySelector("#profile"), { height: 280 }).then(
      (canvas) => {
        // document.body.appendChild(canvas);
        download(canvas.toDataURL(), "profile.png");
      }
    );
  };

  const download = (url, filename) => {
    var link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = url;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    }
  };

  return (
    <div className="App flex justify-center items-center w-full h-screen m-4">
      <main className="bg-[#EEEEEE] px-8 py-3 lg:w-[50%]">
        <h1 className="uppercase font-bold md:text-4xl md:my-10 flex justify-start">
          alapaca generator
        </h1>
        <div className="grid md:grid-cols-2">
          <div>
            <section className="h-[320px] mr-4 lg:w-[80%] lg:h-[280px] relative overflow-hidden">
              <DisplayAlapaca updateStyle={updateStyle} />
            </section>
            <div className=" md:w-[80%] flex gap-4">
              <div className="bg-white mt-4 w-full py-2">
                <i className="fa-solid fa-shuffle mr-3" />
                <button onClick={handleRandomStyle} className=" font-bold">
                  Random
                </button>
              </div>
              <div className="bg-white mt-4 w-full py-2 ">
                <i className="fa-solid fa-download mr-3" />
                <button onClick={handleDownload} className=" font-bold">
                  Download
                </button>
              </div>
            </div>
          </div>

          <section className="my-5">
            <div>
              <p className="uppercase flex justify-start mb-4 text-sm font-bold">
                accessorize the alapaca's
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {accessories.map((part, index) => (
                  <button
                    type="button"
                    className={` ${
                      part.name === accessories_style[changeAccessory].key
                        ? "bg-[#00215A] text-white font-bold border-none"
                        : ""
                    } border-2 border-blue-300 rounded-3xl w-fit px-4 py-1 hover:bg-[#00215A] hover:text-white hover:font-bold`}
                    key={index}
                    onClick={() => handleChangeAccessory(index)}
                  >
                    {part.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="uppercase flex justify-start mb-4 text-sm font-bold">
                style
              </p>
              <div className="grid grid-cols-3 gap-3">
                {accessories[changeAccessory].styles.map((s, index) => (
                  <button
                    type="button"
                    className={`${
                      index === changeStyle
                        ? "bg-[#00215A] text-white font-bold border-none"
                        : ""
                    }  border-2 border-blue-300 rounded-3xl w-fit px-4 py-1 hover:bg-[#00215A] hover:text-white hover:font-bold`}
                    key={index}
                    onClick={() => handleChangeStyle(index)}
                  >
                    {s.style_name}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
        <p className="font-bold">Created by Thanh</p>
        <p>{new Date().getFullYear()}</p>
        <p>Copyright &copy;</p>
      </main>
    </div>
  );
}

export default App;
