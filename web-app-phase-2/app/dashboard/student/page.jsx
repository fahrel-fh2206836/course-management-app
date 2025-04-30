'use client'
import React, { useContext } from 'react'
import { UserContext } from '@/app/context/UserContext'


export default function page() {
  const { user } =  useContext(UserContext);
  return (
    <div>{user?.firstName}</div>
  )
}
