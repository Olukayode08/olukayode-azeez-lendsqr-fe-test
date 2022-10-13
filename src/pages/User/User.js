import React  from 'react'
import {useParams} from 'react-router-dom'
import {OrganizationUser, Sidebar} from '../../components';


const User = () => {
  const {id} = useParams()
  return (
    <>
    <OrganizationUser id={id} />
    <Sidebar />
    </>
  )
}


export default User