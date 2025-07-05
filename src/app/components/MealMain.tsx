"use client";

import { useState } from "react";
import ContentMain from "./ContentMain";
import SideBar from "./SideBar";
import "/public/styles/sidebar.css";
import ContentMeal from "./ContentMeal";

function MealMain() {

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
                <ContentMeal />
            </div>     
        </div>
       
    );
}

export default MealMain;