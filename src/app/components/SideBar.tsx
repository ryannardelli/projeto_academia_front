"use client";
import { CreditCard, Dumbbell, Grid, HeartPulse, LineChart, LogOut, Settings, User, Utensils, Activity, HandPlatter } from 'lucide-react';

type Props = {
    isActive: boolean;
}

function SideBar({ isActive }: Props) {
    return(
        <div className={`navigation ${isActive ? "active" : ""}`}>
            <ul>                     
               <li>
                    <a href="#">
                        <span className="icon p-2">
                            <HeartPulse className="w-[1.75rem] h-[1.75rem]" />
                        </span>                                                  
                        <span className="title text-assets font-bold text-lg tracking-wider uppercase">RedPulse</span>
                    </a>
                </li>

                <li>
                    <a href="/dashboard">
                        <span className="icon p-2">
                            <Grid className="w-[1.75rem] h-[1.75rem]" /> 
                        </span>                                                  
                        <span className="title">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="/dashboard/training">
                        <span className="icon p-2">
                            <Dumbbell className="w-[1.75rem] h-[1.75rem]" />
                        </span>
                        <span className="title">Treinos</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon p-2">
                            <Activity className="w-[1.75rem] h-[1.75rem]" />
                        </span>
                        <span className="title">Exercícios</span>
                    </a>
                </li>

                <li>
                    <a href="/dashboard/diet">
                        <span className="icon p-2">
                            <Utensils className="w-[1.75rem] h-[1.75rem]" />
                        </span>
                        <span className="title">Dietas</span>
                    </a>
                </li>

                 <li>
                    <a href="#">
                        <span className="icon p-2">
                            <HandPlatter className="w-[1.75rem] h-[1.75rem]" />
                        </span>
                        <span className="title">Refeições</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon p-2">
                            <LineChart className="w-[1.75rem] h-[1.75rem]" />
                        </span>
                        
                        <span className="title">Progresso</span>
                    </a>
                </li>

                    <li>
                    <a href="#">
                        <span className="icon p-2">
                            <CreditCard className="w-[1.75rem] h-[1.75rem]" />
                        </span>                           
                        <span className="title">Pagamentos</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon p-2">
                                <Settings className="w-[1.75rem] h-[1.75rem]" />
                        </span>
                        <span className="title">Configurações</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon p-2">
                            <User className="w-[1.75rem] h-[1.75rem]" />
                        </span>
                        <span className="title">Perfil</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon p-2">
                            <LogOut className="w-[1.75rem] h-[1.75rem]" />
                        </span>
                        <span className="title">Sair</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;