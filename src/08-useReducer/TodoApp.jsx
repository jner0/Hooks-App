import { useTodos } from "../../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";



export const TodoApp = () => { 

    const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, pendingTodosCount, todosCount } = useTodos();

    

    return (
        <>
            <h1>TodoApp {todosCount} <small>Pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo = { id => handleDeleteTodo(id)} onToggleTodo={handleToggleTodo}/>
                </div>

                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewsTodo={handleNewTodo}/>
                </div>
            </div>

        </>
  )
}
