import React from 'react'
import MyForm from './components/Form';
import './page.module.scss'
import Partenaires from '../components/Partenaires';
import GoogleMaps from './components/GoogleMaps'

const page = () => {
  return (
    <div>
      <MyForm />
      <Partenaires />
      <GoogleMaps />

    </div>
  )
}

export default page;