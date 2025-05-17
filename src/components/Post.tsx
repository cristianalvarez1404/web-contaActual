import React from 'react'

const Post = ({info}:any) => {
  return (
    <div className='mb-6 border-1 border-gray-400 p-5 rounded-2xl'>
      <a href={`/${info.type}/${info.id}`}>
        <h2 className='bg-gray-200 p-2 font-black text-xl rounded-3xl mb-2'>{info.title}</h2>
      </a>
      <p className='mb-4'>{info.description}</p>
      <a className='mr-2 text-[0.6rem] font-bold bg-blue-950 text-white p-2 rounded-2xl' href={`/${info.type}`}>Tipo: {info.type}</a>
      <small className='font-bold text-[0.6rem]'>Fecha: {info.date}</small>
    </div>
  )
}

export default Post