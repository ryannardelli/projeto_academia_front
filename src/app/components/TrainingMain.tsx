"use client";

import { useState } from "react";
import ContentMain from "./ContentMain";
import ContentTraining from "./ContentTraining";
import SideBar from "./SideBar";
import "/public/styles/sidebar.css";

function TrainingMain() {

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
                <ContentTraining />
            </div>     
        </div>
       
    );
}

export default TrainingMain;