import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";


function DarkMode() {

    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className="flex items-center justify-center ">
            <button className=" w-full m-3 p-3 border border-white bg-slate-400 dark:bg-gray-900" onClick={()=> darkModeHandler()}>
                {
                    dark && <IoMoon />
                }
                {
                    !dark && <IoSunny />
                }
            </button>
        </div>
    );
}

export default DarkMode;