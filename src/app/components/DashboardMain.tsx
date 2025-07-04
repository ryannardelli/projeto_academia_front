"use client";

import { useState } from "react";
import ContentMain from "./ContentMain";
import ContentDashboard from "./ContentDashboard";
import SideBar from "./SideBar";
import "/public/styles/sidebar.css";

function DashboardMain() {

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
                <ContentDashboard />
            </div>     
        </div>
       
    );
}

export default DashboardMain;