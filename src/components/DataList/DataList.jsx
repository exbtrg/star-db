import React from 'react'
import useRequest from '../../hooks/useRequest'
import Spinner from '../Spinner'

const DataWrapper = ({ component, getData, ...rest }) => {
  const { data, loading, error } = useRequest(getData)

  return (
    <>
      {loading ? <Spinner error={error} /> : React.cloneElement(component, { data, ...rest })}
    </>
  )
}

export default DataWrapper