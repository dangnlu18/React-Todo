import React from 'react';

const Todo = props =>{
	return (
		<div 
		onClick={props.onClick} 
		className={`${props.item.completed ? "completed" : ""}`}>
			<p> {props.item.task} </p>
		</div>
		)
}

export default Todo;