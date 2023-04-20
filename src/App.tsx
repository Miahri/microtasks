import React, {useState} from 'react';
import './App.css';
import {Tasks, TaskType} from "./Tasks";
import {Cars, CarType} from "./Cars";
import {Todolist} from "./Todolist";

export type FilterValuesType = "all" | "active" | "completed" | "none";

function App() {
  const data1 = {
    title: "What to do",
    tasks: [
      {id: 1, title: "HTML&CSS2", isDone: true},
      {id: 2, title: "JS2", isDone: true}
    ],
    students: [
      'Jago Wormald1',
      'Saul Milne2',
      'Aariz Hester3',
      'Dion Reeve4',
      'Anisa Ortega5',
      'Blade Cisneros6',
      'Malaikah Phelps7',
      'Zeeshan Gallagher8',
      'Isobella Vo9',
      'Rizwan Mathis10',
      'Menaal Leach11',
      'Kian Walton12',
      'Orion Lamb13',
      'Faizah Huynh14',
      'Crystal Vaughan15',
      'Vivien Hickman16',
      'Stuart Lu17',
      'Karol Davison18',
      'Dario Burns19',
      'Chloe Rich20',
      'Martyna Felix',
      'Nida Glass',
      'Maeve Miles',
      'Hasnain Puckett',
      'Ayman Cano',
      'Safwan Perry',
      'Fox Kelly',
      'Louise Barlow',
      'Malaki Mcgill',
      'Leanna Cline',
      'Willard Hodge',
      'Amelia Dorsey',
      'Kiah Porter',
      'Jeanne Daly',
      'Mohsin Armstrong',
      'Laurie Rangel',
      'Princess Tierney',
      'Kasim Kendall',
      'Darryl Cope',
      'Elysha Ray',
      'Liyana Harris',
      'Kashif Blackburn',
      'Atif Zimmerman',
      'Sila Hartley',
      'Ralphie Hebert',
    ]
  }
  const data2 = {
    title: "What to learn",
    tasks: [
      {id: 1, title: "HTML&CSS", isDone: true},
      {id: 2, title: "JS", isDone: true}
    ],
    students: [
      'Rick Kane',
      'Finnlay Bentley',
      'Samia North',
      'Isaac Morton',
      'Lily-Ann Clifford',
      'Thalia Park',
      'Sapphire Cruz',
      'Cieran Vazquez',
      'Anya Estes',
      'Dominika Field',
      'Rosanna Chung',
      'Safiyah Davey',
      'Ryley Beasley',
      'Kalvin Trejo',
      'Evie-Mae Farrell',
      'Juliet Valencia',
      'Astrid Austin',
      'Lyle Montgomery',
      'Nisha Mora',
      'Kylie Callaghan',
      'Star Wilks',
      'Marissa Colley',
      'Asa Fuller',
      'Leigh Kemp',
      'Avleen Dawson',
      'Sammy Bonilla',
      'Acacia Becker',
      'Coral Shepherd',
      'Melina Molina',
      'Kiran Bailey',
      'Clara Escobar',
      'Alexandru Horn',
      'Brandon-Lee Mercado',
      'Elouise Weston',
      'King Long',
      'Kerri Searle',
      'Kanye Hamer',
      'Elwood Benitez',
      'Mikail Whitaker',
      'Bobby Hardy',
      'Talha Ferry',
      'Priscilla Landry',
      'Olivia-Grace Cain',
      'Kiaan Wallace',
      'Wesley Padilla90',
      'Ella-Grace Wooten91',
      'Kaif Molloy92',
      'Kamal Broadhurst93',
      'Bianca Ferrell94',
      'Micheal Talbot95',
    ]
  }

  const deleteAll = (tasks: Array<TaskType>) => {
    tasks.length = 0;
  }

  const topCars: Array<CarType> = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
  ]

  let [tasks, setTasks] = useState([
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false},
    {id: 4, title: "Rest API", isDone: false},
    {id: 5, title: "GraphQL", isDone: false},
  ]);

  function addBtn(title: string) {
    let stateCopy = [...tasks, {id: tasks.length + 1, title, isDone: false}];
    setTasks(stateCopy);
  }

  function removeTask(id: number) {
    let filteredTasks = tasks.filter(t => t.id !== id);
    setTasks(filteredTasks);
  }

  let [filter, setFilter] = useState<FilterValuesType>("all");

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  return (
      <div className="App">
        <Tasks title={data1.title}
               tasks={data1.tasks}
               deleteHandler={deleteAll}/>
        <Tasks title={data2.title}
               tasks={data2.tasks}
               deleteHandler={deleteAll}/>
        <Cars cars={topCars}/>
        <Todolist title="What to learn"
                  filter={filter}
                  tasks={tasks}
                  addBtn={addBtn}
                  removeTask={removeTask}
                  changeFilter={changeFilter}
                  deleteHandler={deleteAll}/>
      </div>
  );
}

export default App;
