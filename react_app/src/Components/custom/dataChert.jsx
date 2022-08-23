import React, {useEffect, useState} from 'react';
import DoughnutChart from "./DoughnutChart";


export default function DataChert({spaces}) {

    const [space, countSpace] = useState(0)
    const [lists, countLists] = useState(0)
    const [tasks, countTasks] = useState(0)


    useEffect(() => {
        getData()
    }, [spaces])


    const getData = () => {
        countSpace(0)
        countLists(0)
        countTasks(0)
        for (let i = 0; i < spaces.length; i++) {
            countSpace(space => space + 1)
            for (let j = 0; j < spaces[i].lists.length; j++) {
                countLists(lists => lists + 1)
                for (let k = 0; k < spaces[i].lists[j].tasks.length; k++) {
                    countTasks(tasks => tasks + 1)
                }
            }
        }
    }

    return (
        <>
            <DoughnutChart data={{
                labels: ['spaces', 'lists', 'tasks'],
                datasets: [{
                    data: [space, lists, tasks],
                    backgroundColor: ['rgba(155,155,253,0.99)', 'rgba(155,253,201,0.99)', 'rgba(253,155,155,0.99)'],
                }]
            }}/>
        </>
    )
}
