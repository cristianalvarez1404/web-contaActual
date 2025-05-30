import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")
  const navigate = useNavigate()

  const handleFormPost = async (e:any) => {
    e.preventDefault()
    const form = new FormData(e.target)
    
    const newArticle:any = {}

    if (!form.get('title') || !form.get('description') || !form.get('date')) {
      setError("Todos los campos obligatorios deben estar llenos");
      setTimeout(() => {
        setError("")
      },5000)
      return;
    }

    for(const [key,value] of form.entries()){
      (key === "category") 
      ?
        newArticle[key] = Number(value)
      :
        newArticle[key] = value
    }

    try {
      const req = await axios.post('http://localhost:3000/',newArticle)
      if(req.status >= 200 && req.status < 300){
        setMessage(`Article created succefully 🎉🥳`)
        setTimeout(() => {
          setMessage("")
          navigate("/")
        },4000)
      }else {
        throw new Error(`Error creating article ${newArticle.title} - Error - ${req.status}`)
      }

    }catch(err){
      console.log(err)
      if(err instanceof Error) {
        setError(err.message)
        setTimeout(() => {
          setError("")
        },5000)
      }
      else if(typeof err === "string" ){
        setError(err)
        setTimeout(() => {
          setError("")
        },5000)
      }else {
        setError("Error in request 😢")
        setTimeout(() => {
          setError("")
        },5000)
      }
    }
  }



  return (
    <div className="min-h-[calc(100vh-100px)] w-[85%] m-auto">
      {error && <p className="w-fit p-2 mt-5 m-auto rounded-2xl bg-red-500 text-white">{error}</p> }
      {message && <p className="w-fit p-2 mt-5 m-auto rounded-2xl bg-green-700 text-white">{message}</p>}
      <h2 className="text-3xl mt-5 mb-5">Crear post</h2>
      <form onSubmit={handleFormPost}>
        <div className="mb-5">
          <label
            htmlFor=""
            className="mr-5 p-2 bg-gray-200 mb-2 w-fit rounded-xl font-medium mt-2"
          >
            Titulo
          </label>
          <input
            type="text"
            placeholder="title"
            name="title"
            className="w-[90%] border border-gray-400 outline-none rounded border-gray-50 p-1"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className="block p-2 bg-gray-200 mb-2 w-fit rounded-xl font-medium mt-2"
          >
            Descripción
          </label>
          <textarea
            className="w-full block border-2 border-gray-400 rounded-2xl outline-none p-5"
            rows={10}
            name="description"
            placeholder="Write your content"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className="mr-5 p-2 bg-gray-200 mb-2 w-fit rounded-xl font-medium mt-2"
          >
            Imagen
          </label>
          <input
            type="file"
            accept="image/*"
            className="border bg-blue-950 text-white p-2 rounded-2xl text-sm cursor-pointer"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className="mr-5 p-2 bg-gray-200 mb-2 w-fit rounded-xl font-medium mt-2"
          >
            Tipo
          </label>
          <select name="category" id="">
            <option value="1">Tributaria</option>
            <option value="2">Nómina</option>
            <option value="3">Contabilidad</option>
            <option value="21">Costos</option>
            <option value="1">Otros</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className="mt-8 p-2 bg-gray-200 mb-2 w-fit rounded-xl font-medium mt-2"
          >
            Fecha del post
          </label>
          <input className="ml-2" type="date" name="date"/>
          {/* <span>{new Date().toLocaleDateString()}</span> */}
        </div>
        <div className="mb-10 flex items-center justify-center">
          <input
            type="submit"
            value="Crear"
            className="w-[10rem] bg-transparent border-2 border-blue-900 cursor-pointer text-blue-900 px-5 py-2 rounded-2xl font-bold hover:bg-blue-900 hover:text-white hover:transition-colors"
          />
        </div>
        
      </form>
    </div>
  );
};

export default NewPost;
