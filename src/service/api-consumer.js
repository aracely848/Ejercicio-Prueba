const CreateTask = async (task) => {
    try {
        let response = await fetch(`${process.env.REACT_APP_FIREBASE_FUNCTION_URL}/task`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(task)
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

const UpdateTask = async (task) => {
    try {
        let response = await fetch(`${process.env.REACT_APP_FIREBASE_FUNCTION_URL}/task/${task.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(task)
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

const DeleteTask = async (taskId) => {
    try {
        let response = await fetch(`${process.env.REACT_APP_FIREBASE_FUNCTION_URL}/task/${taskId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

export default {
    CreateTask,
    DeleteTask,
    UpdateTask
}