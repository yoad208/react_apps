import React from 'react';
import Calendar from "react-calendar";
import DoughnutChart from "../custom/DoughnutChart";
import 'chart.js/auto'
import '../../dashboard.css'
import BarChart from "../custom/BarChart";
import ThisWeekTasks from "../operations/thisWeekTasks";

function Dashboard({spaces}) {

    return (
        <>
            <div className='container'>
                <DoughnutChart spaces={spaces}/>
                <Calendar/>
                <ThisWeekTasks spaces={spaces}/>
                <BarChart spaces={spaces}/>
            </div>
        </>
    );
}

export default Dashboard;