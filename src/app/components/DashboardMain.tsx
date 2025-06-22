"use client";

import { useState } from "react";
import ContentMain from "./ContentMain";
import SideBar from "./SideBar";
import "/public/styles/container.css";
import ContentDashboard from "./ContentDashboard";

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