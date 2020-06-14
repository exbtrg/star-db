import React from 'react'
import useRequest from '../../hooks/useRequest'
import Spinner from '../Spinner'

const DataWrapper = ({ component, getData, id, ...rest }) => {
  const { data, loading, error } = useRequest(getData, id)

  return (
    <>
      {loading ? <Spinner error={error} loading={loading} /> : React.cloneElement(component, { ...data, ...rest })}
    </>
  )
}

export default DataWrapper