import React from "react";
import {Doughnut} from "react-chartjs-2";
import 'chart.js/auto'

export default function DoughnutChart({data}) {
    return (
        <Doughnut data={data} height={400} width={440}  type={'doughnut'}
                  options={{maintainAspectRatio: false}}/>
    )
}