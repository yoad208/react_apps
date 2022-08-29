import React from 'react';
import Calendar from "react-calendar";
import DataChart from "../custom/DataChart";
import {Bar} from "react-chartjs-2";
import 'chart.js/auto'

function Dashboard({spaces}) {

    return (
        <>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem',textAlign: 'center', width: '80vw', height: '85vh', margin: '0 .7rem'}}>
                <div>
                    <Bar data={{
                        labels: ['spaces', 'lists', 'tasks'],
                        datasets: [{
                            label: 'DataSet',
                            data: [4, 2, 2],
                            backgroundColor: ['rgba(155,155,253,0.99)', 'rgba(155,253,201,0.99)', 'rgba(253,155,155,0.99)'],
                        }]
                    }}  type={'bar'}
                              options={{maintainAspectRatio: false}}/>
                </div>
                <div>
                    <Calendar/>
                    <DataChart spaces={spaces} type={'doughnut'}/>
                </div>
            </div>
        </>
    );
}

export default Dashboard;