const { useState } = require("react")



const useCache = () => {

    const [cache, setCache] = useState({})
    const getFromCache = (key) => {
        return cache[key]
    }

    const setInCache = (key, value) => {
        setCache(prevcache => ({ ...prevcache, [key]: value }))
    }
    return { getFromCache, setInCache }
}

export default useCache