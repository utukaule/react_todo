import { useState } from "react"

import { Todosinput } from "./Todosinput"

import { Todoitem } from "./Todoitem"

import { nanoid } from "nanoid"

import { Completeditem } from "./Completeditem"

function Todo() {

    const [todoList, setTodosList] = useState([]);

    const getdata = (todo) => {

        const payload = {
            title: todo,
            status: false,
            id: nanoid(4),
        }

        setTodosList([...todoList, payload])

        console.log(todoList)
    };


    const handlestatus = (id) => {

        setTodosList(todoList.map((e) => (e.id === id ? { ...e, status: !e.status } : e)))

    }
    const deleteitem = (id) => {

        const del = todoList.filter(todoList => id !== todoList.id)

        setTodosList(del)

        deleteitem2(id)
    }

    const [letest, setLetest] = useState([])


    const showdata = () => {

        const data = todoList.filter(todo => todo.status !== false);

        setLetest(...letest, data)
    }

    const deleteitem2 = (id) => {

        const del = letest.filter(todoList => id !== todoList.id)

        setLetest(del)

    }

    return (
        <div className="FLEX">

            <div>
                <Todosinput getdata={getdata} />

                {todoList.map((e) => (

                    <Todoitem deleteitem={deleteitem} handlestatus={handlestatus} todo={e}></Todoitem>
                ))}
            </div>

            < Completeditem letest={letest} showdata={showdata} />
        </div>


    );
}
export { Todo }