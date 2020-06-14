import { useState, useEffect, useMemo, useCallback } from 'react'

const useRequest = (getData, id) => {
  const initialState = useMemo(() => ({
    data: null,
    loading: true,
    error: null
  }), [])

  const [requestState, setRequestState] = useState(initialState)

  const getDataMemo = useCallback(getData, [getData])

  useEffect(() => {
    setRequestState(initialState)
    let canceled = false

    getDataMemo(id)
      .then(data => !canceled && (
        setRequestState((prev) => (
          { ...prev, data, loading: false }
        ))
      ))
      .catch(error => (
        setRequestState((prev) => (
          { ...prev, error }
        ))
      ))

    return () => { canceled = true }
  }, [getDataMemo, id, initialState])

  return requestState
}

export default useRequest