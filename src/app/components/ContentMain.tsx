"use client";

import "/public/styles/main.css";
import { Menu, Search } from "lucide-react";

type Props = {
    onToggle: () => void;
}

function ContentMain({ onToggle }: Props) {
    return(
        <div className="topbar">
            <div className="toggle" onClick={onToggle}>
                <Menu className="w-8 h-8" />
            </div>

            <div className="search">
                <label>
                    <input type="text" placeholder="Pesquise aqui" />
                    <Search className="search-icon" />
                </label>
            </div>

            <div className="user">
                <img src="assets/img/user-default.png" alt="User Image" />
            </div>
        </div>
    );
}

export default ContentMain;