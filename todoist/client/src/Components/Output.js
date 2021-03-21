import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemDoing, addItemDone, addItemToDo, removeItemDoing, removeItemDone, removeItemToDo } from '../Actions/index';
import './styles/output.css';
export default function Todo() {
    const [todo, setTodo] = useState('');
    const [doing, setDoing] = useState('');
    const [done, setDone] = useState('');
    const dispatch = useDispatch();
    const [response, setResponse] = useState('');
    const ToDo = useSelector((state) => state.ToDo);
    const Doing = useSelector((state) => state.Doing);
    const Done = useSelector((state) => state.Done);
    const user = useSelector((state) => state.User);
    const [error, setError] = useState(false);



    function handleChangeToDo(e) {
        setTodo(e.target.value);
    }
    function handleAddToDo(e) {
        dispatch(addItemToDo(todo));
        setTodo('');
    }
    function handleRemoveToDo(e, obj) {
        let ObjToBeRemoved = Object.values(obj).pop();
        dispatch(removeItemToDo(ObjToBeRemoved))
    }
    // function handleDeleteList(e) {
    //     // setList([]);
    // }
    // ---------------------------------------------------------------------------------------------------
    function handleChangeDoing(e) {
        setDoing(e.target.value);
    }
    function handleAddDoing(e) {
        dispatch(addItemDoing(doing));
        setDoing('');
    }
    function handleRemoveDoing(e, obj) {
        let ObjToBeRemoved = Object.values(obj).pop();
        dispatch(removeItemDoing(ObjToBeRemoved))
    }
    // ---------------------------------------------------------------------------------------------------
    function handleChangeDone(e) {
        setDone(e.target.value);
    }
    function handleAddDone(e) {
        dispatch(addItemDone(done));
        setDone('');
    }
    function handleRemoveDone(e, obj) {
        let ObjToBeRemoved = Object.values(obj).pop();
        dispatch(removeItemDone(ObjToBeRemoved))
    }
    // ------------------------------------------------------------------------------------------------------------------------
    function handleAddDoingRemoveToDo(e, obj) {
        dispatch(addItemDoing(obj.obj));
        handleRemoveToDo(e, obj);
    }
    function handleAddDoneRemoveDoing(e, obj) {
        dispatch(addItemDone(obj.obj));
        handleRemoveDoing(e, obj);
    }
    function handleAddToDoRemoveDoing(e, obj) {
        dispatch(addItemToDo(obj.obj));
        handleRemoveDoing(e, obj);
    }
    function handleAddDoingRemoveDone(e, obj) {
        dispatch(addItemDoing(obj.obj));
        handleRemoveDone(e, obj);
    }
    function handleSave(e) {

        console.log(user + "user");
        let todo = Object.assign({}, ToDo)
        let doing = Object.assign({}, Doing)
        let done = Object.assign({}, Done)
        let body = {
            userName: user, todo, doing, done
        }
        console.log(body);
        axios.put('https://todolistserver-snakshay.herokuapp.com/save', body)
            .then((response) => {
                setResponse(response.data)
                setError(false);
                setTimeout(() => {
                    setResponse('');

                }, 1000);
            })

            .catch((error) => {
                // console.log('error');
                setResponse('Error occured! please try again');
                setError(true)
            })


    }

    return (
        <div>
            {/* ----------------------------------------Card Container-------------------------------------------------- */}
            <div className='card-container'>
                {/* -------------------------------------To-Do card ----------------------------------------------*/}
                <div className='card'>
                    <div className='title'><i className="fas fa-clipboard-list"></i> To-Do</div>

                    <ul className='list'>
                        {ToDo.map((obj) =>
                        (<li key={obj}> {obj}
                            <button className='trashButton fa-button' onClick={(e) => handleRemoveToDo(e, { obj })}><i className="fas fa-trash fa-button"></i></button>
                            <button className='button-right fa-button' onClick={(e) => handleAddDoingRemoveToDo(e, { obj })}><i className="fas fa-caret-right fa-button"></i></button>
                            <br />
                        </li>)
                        )}

                    </ul>
                    <div className='cardFooter'>

                        <input type='text' className='textbox' onChange={(e) => handleChangeToDo(e)} value={todo} placeholder='Add new item to To-Do'></input>
                        {todo.length > 0 ? <span className='footerButtonAdd'><button className='addButton' onClick={(e) => handleAddToDo(e)}> <i className="fas fa-plus" ></i></button></span> : <span className='footerButtonAdd'><button className='addButton disabled' disabled> <i className="fas fa-plus"></i></button></span>}

                    </div>
                </div>
                {/* -------------------------------------DOing card ----------------------------------------------*/}
                <div className='card'>
                    <div className='title'><i className="far fa-edit"></i> Ongoing...</div>
                    <ul className='list'>
                        {Doing.map((obj) =>
                        (<li key={obj}>
                            <button className='button-left' onClick={(e) => handleAddToDoRemoveDoing(e, { obj })}><i className="fas fa-caret-left fa-button"></i></button>
                            {obj}
                            <button className='trashButton ' onClick={(e) => handleRemoveDoing(e, { obj })}><i className="fas fa-trash fa-button"></i></button>
                            <button className='button-right' onClick={(e) => handleAddDoneRemoveDoing(e, { obj })}><i className="fas fa-caret-right fa-button"></i></button>
                        </li>)
                        )}

                    </ul>
                    <div className='cardFooter'>

                        <input type='text' className='textbox' onChange={(e) => handleChangeDoing(e)} value={doing} placeholder='Add new item to Ongoing'></input>
                        {doing.length > 0 ? <span className='footerButtonAdd'><button className='addButton' onClick={(e) => handleAddDoing(e)}> <i className="fas fa-plus"></i></button></span> : <span className='footerButtonAdd'><button className='addButton disabled' disabled > <i className="fas fa-plus"></i></button></span>}

                    </div>
                </div>
                {/* -------------------------------------DOne card ----------------------------------------------*/}
                <div className='card'>
                    <div className='title'><i className="fas fa-clipboard-check"></i> Completed</div>
                    <ul className='list'>
                        {Done.map((obj) =>
                        (<li key={obj}>
                            <button className='button-left' onClick={(e) => handleAddDoingRemoveDone(e, { obj })}><i className="fas fa-caret-left fa-button"></i></button>
                            {obj} <button className='trashButton' onClick={(e) => handleRemoveDone(e, { obj })}><i className="fas fa-trash fa-button"></i></button></li>)
                        )}

                    </ul>
                    <div className='cardFooter'>

                        <input type='text' className='textbox' onChange={(e) => handleChangeDone(e)} value={done} placeholder='Add new item to Completed'></input>
                        {done.length > 0 ? <span className='footerButtonAdd'><button className='addButton' onClick={(e) => handleAddDone(e)}> <i className="fas fa-plus"></i></button></span> : <span className='footerButtonAdd'><button className='addButton disabled' disabled> <i className="fas fa-plus"></i></button></span>}
                    </div>
                </div>

            </div>




            {/* <div>
                <h3>To Do</h3>
                <input type='text' onChange={(e) => handleChangeToDo(e)} value={todo} placeholder='add new ToDO'></input>
                <br />
                <button type='button' onClick={(e) => handleAddToDo(e)}>Add</button>
                <ul >
                    {ToDo.map((obj) =>
                        (<li key={obj}> {obj} <button onClick={(e) => handleRemoveToDo(e, { obj })}>-</button></li>)
                    )}
                </ul>
                <button type='button' onClick={(e) => handleDeleteList(e)}>Delete List</button>
            </div>
            <hr></hr>

            <div>
                <h3>Doing</h3>
                <input type='text' onChange={(e) => handleChangeDoing(e)} value={doing} placeholder='add new ToDO'></input>
                <br />
                <button type='button' onClick={(e) => handleAddDoing(e)}>Add</button>
                <ul >
                    {Doing.map((obj) =>
                        (<li key={obj}> {obj} <button onClick={(e) => handleRemoveDoing(e, { obj })}>-</button></li>)
                    )}
                </ul>
                <button type='button' onClick={(e) => handleDeleteList(e)}>Delete List</button>
            </div>
            <hr></hr>


            <div>
                <h3>Done</h3>
                <input type='text' onChange={(e) => handleChangeDone(e)} value={done} placeholder='add new ToDO'></input>
                <br />
                <button type='button' onClick={(e) => handleAddDone(e)}>Add</button>
                <ul >
                    {Done.map((obj) =>
                        (<li key={obj}> {obj} <button onClick={(e) => handleRemoveDone(e, { obj })}>-</button></li>)
                    )}
                </ul>
                <button type='button' onClick={(e) => handleDeleteList(e)}>Delete List</button>
            </div>
            <hr></hr> */}
            <div className='btn-container'>

                <button className='btnDark hover ' onClick={(e) => handleSave(e)}> Save</button><br />


                {error ? <span style={{ color: 'red' }}> {response}</span> : <span>{response}</span>}
            </div>

        </div >
    );
}