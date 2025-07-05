"use client";

import { useState } from "react";
import ContentMain from "./ContentMain";
import SideBar from "./SideBar";
import "/public/styles/sidebar.css";
import ContentDiet from "./ContentDiet";

function DietMain() {

    const [sidebarActive, setSidebarActive] = useState(false);

    const handleToggle = () => {
        setSidebarActive(!sidebarActive);
    };
    
    return(
        <div>
             <div className="container">
                <SideBar isActive={sidebarActive} />
            </div>
                  
            <div className={`main ${sidebarActive ? "active" : ""}`}>
                <ContentMain onToggle={handleToggle} />
                <ContentDiet />
            </div>     
        </div>
       
    );
}

export default DietMain;