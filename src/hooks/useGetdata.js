import { useState, useEffect, useCallback } from 'react'
// refactorizar
export default function useGetData ({ url }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // memorizar una funcion
  // fetch limit 100 => fetch limit 10
  const getData = useCallback(async () => {
    return fetch(url)
      .then(res => res.json())
      .then(j => {
        setLoading(false)
        setData(j.launches)
      })
  }, [url])

  useEffect(() => {
    getData()
  }, [getData])

  return { data, loading }
}
