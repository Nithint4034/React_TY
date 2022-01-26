import React, { useState } from 'react'

function Todoo() {
    const [todos, settodos] = useState([])
    const [initialTodo, setinitialTodo] = useState({
        task: '',
        completed: false
    })

    const addTodo = () =>{
        const todosCopy = [...todos]
        const index= todosCopy.findIndex((todo)=>{
            return todo.task === initialTodo.task
        })
        console.log(index)
        if(index === -1){
            todosCopy.push(initialTodo)
            settodos(todosCopy)
        }else{
            console.error("todo alredy exist !")
        }
    }

    const handleChange = (event)=>{
      //  console.log(event.target.value);
      const initialTodoCopy = {...initialTodo}
      initialTodoCopy.task= event.target.value
      initialTodoCopy.completed= false
      setinitialTodo(initialTodoCopy)
    }

    const completeTodo = (index)=>{
        console.log(index);
        if(index>= 0 && index < todos.length){
            const todoCopy = [...todos] // array of obj

            // if (todoCopy[index].completed === true){
            //     todoCopy[index].completed= false
            // } else{
            //         todoCopy[index].completed = true
            // }

            todoCopy[index].completed = !todoCopy[index].completed
            settodos(todoCopy)
        }
    }

    const deleteTodo = (index)=>{
        const todoCopy = [...todos]
        const filteredTodos = todoCopy.filter((todo,i)=>{
            return i !== index
        })
        settodos(filteredTodos)
    }
    return (
        <div>
            {/* <div>
                <input type="text" name="task" value={initialTodo.task}
                onChange={(event)=>{handleChange(event)}} />
                <button onClick={()=>{addTodo()}}> Add Todo</button>
            </div>   
            
            <div>
            {todos.length>0 ? todos.map((todo, index)=>{
                return <div key ={index}>                                           
                <span style={todo.completed ? 
                {
                    textDecoration:"line-through"
                }:{

                }
                }>{todo.task} </span>
                    <button onClick={()=>{ completeTodo(index)}}> Completed</button>
                    <button onClick={()=>{ deleteTodo(index)}}> delete</button>
                </div>
            }): "No todos"}
            </div> */}
        </div>
    )
}

export default Todoo















// import React, {useState} from 'react'

// function TodoApp() {
//     const [todos, settodos] = useState([])
//     const [initialTodo, setinitialTodo] = useState({
//         task='',
//         completed:false
//     })
//     const addTodo = () => {
//         const todoCopy = [...todos]
//         const index = todoCopy.findIndex((todo)=>{
//             return todo.task === initialTodo.task
//         })
//         console.log(index);
//         if (index === -1){
//             todoCopy.push(initialTodo)
//             settodos(todoCopy)
//         }else{
//             console.error('Todo already exists')
//         }
//     }
//     const handleChange = (event) =>{
//         //console.log(event.target.value);
//         const initialTodoCopy = {...initialTodo}
//         initialTodoCopy.task = event.target.value
//         initialTodoCopy.completed = false
//         setinitialTodo(initialTodoCopy)
//     }
//     const completeTodo = (index) =>{
//         console.log(index);
//         if(index >= 0 && index < todos.length){
//             const todoCopy = [...todos]
//             // if(todoCopy[index].completed === true){
//             //     todoCopy[index].completed === false
//             // }else{
//             //     todoCopy[index].completed === true
//             // }
//             todoCopy[index].completed = !todoCopy[index].completed //if true return false else true
//             settodos(todoCopy)
//         }
//     }
//     const deleteTodo = (index) =>{
//         const todoCopy = [...todos]
//         const filteredTodos = todoCopy.filter((todo,i)=>{
//             return i !== index
//         })
//         settodos(filteredTodos)
//     }
//     return (
//         <div>
//             <div>
//                 <input type="text"
//                 name="task"
//                 value={initialTodo.task}
//                 onChange={(event)=>{
//                     handleChange(event)
//                 }}/>
//                 <button onClick={()=>{
//                     addTodo()
//                 }}>Add Todo</button>
//             </div>
//             <div>
//                 {todos.length > 0 ? todos.map((todo, index)=>{
//                     return <div key={index}>
//                         <span style ={todo.completed ?{
//                             textDecoration:'line-through'
//                         }:{
                            
//                         }}>{todo.task}</span>
//                         <button onClick={()=>{
//                             deleteTodo(index)
//                         }}>Delete</button>
//                     </div>
//                 }):'No todos...'}
//             </div>
//         </div>
//     )
// }