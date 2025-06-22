"use client";
import "/public/styles/sidebar.css";
import { CreditCard, Dumbbell, Grid, HeartPulse, LineChart, LogOut, Settings, User, Utensils } from 'lucide-react';

type Props = {
    isActive: boolean;
}

function SideBar({ isActive }: Props) {
    return(
        <div className={`navigation ${isActive ? "active" : ""}`}>
            <ul>                     
               <li>
                    <a href="#">
                        <span className="icon">
                            <HeartPulse />
                        </span>                                                  
                        <span className="title text-assets font-bold text-lg tracking-wider uppercase">RedPulse</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <Grid /> 
                        </span>                                                  
                        <span className="title">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <Dumbbell />
                        </span>
                        <span className="title">Treinos</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <Utensils />
                        </span>
                        <span className="title">Deitas</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <LineChart />
                        </span>
                        
                        <span className="title">Progresso</span>
                    </a>
                </li>

                    <li>
                    <a href="#">
                        <span className="icon">
                            <CreditCard />
                        </span>                           
                        <span className="title">Pagamentos</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                                <Settings />
                        </span>
                        <span className="title">Configurações</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <User />
                        </span>
                        <span className="title">Perfil</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <LogOut />
                        </span>
                        <span className="title">Sair</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;