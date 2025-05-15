import { useEffect, useState } from "react"

export const useFetch = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {


        setLoading(true)

        const getFetch = async () => {

            try {
                const response = await fetch("/src/service/proyectos.json")
                if (!response.ok) {

                    throw new Error("El fetch fallo")
                }
                const json = await response.json()
                const dataFetch = json
                setData(dataFetch)


            } catch (err) {
                setError(err)
                console.log(err);
            } finally {

                setLoading(false)
            }

        }
        getFetch()

    }, [])



    return { data, loading, error }
} 