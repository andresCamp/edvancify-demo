'use client'
import React from 'react'
import { getServerSession } from 'next-auth/next'
import { options } from '../api/auth/[...nextauth]/options'

async function Welcome() {

    const session = await getServerSession(options)

    return (
        <div className='bg-[#F3F5FA]'>
        <h3>{session?.user?.name}</h3>
        </div>
    )
}

export default Welcome
