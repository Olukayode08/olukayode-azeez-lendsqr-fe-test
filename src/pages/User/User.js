import React  from 'react'
import {useParams} from 'react-router-dom'
import {OrganizationUser} from '../../components';


const User = () => {
  const {id} = useParams()
  return (
    <>
    <OrganizationUser id={id} />
    </>
  )
}


export default User