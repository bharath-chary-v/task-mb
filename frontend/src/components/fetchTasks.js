import axios from "axios"
import useCache from "./useCache"

const { useState, useEffect } = require("react")



const useFetchTasks = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const { getFromCache, setInCache } = useCache()
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchtasks = async () => {

            try {
                setLoading(true)
                const cachedtasks = getFromCache('tasks')
                if (cachedtasks) {
                    setTasks(cachedtasks)
                    setLoading(false)
                }
                else {
                    await axios.get("http://localhost:8000/tasks/tasks").then((response) => {

                        setTasks(response?.data)
                        setInCache('tasks', response?.data)
                        setLoading(false)
                    })
                }
            } catch (error) {
                console.log(error)
                setError(error)
                setLoading(false)
            }
        }

        fetchtasks()
    }, [])

    return { tasks, loading, error }
}

export default useFetchTasks