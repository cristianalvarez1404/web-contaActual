import React, { useEffect, useState } from 'react'

const FormNom = () => {
  const [info, setInfo] = useState({
    nombre:"",
    identificacion:"",
    periodicidad:0,
    diasLaborados:0,
    salario:0,
    auxilioTransporte:true
  })

  const [horasExtras,setHorasExtras] = useState({
    hed:5,
    hen:0,
    rn:0,
    hedd:0,
    hedn:0
  })

  const [ausentismos,setAusentismos] = useState({
    incapacidad:0,
    suspension:0,
    licenciaRemunerada:0,
    licenciaNoRemunerada:0
  })

  const [totales,setTotales] = useState({
    sueldo:0 ,
    horasExtras:0,
    auxilioTransporte:0,
    EPS:0,
    AFP:0,
    totalDias:0
  })

  const [infoHE,setInfoHE] = useState({
    hed:0,
    hen:0,
    rn:0,
    hedd:0,
    hedn:0
  })

  const handleInfo = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.type === "checkbox"){
      setInfo(prev => ({...prev,[e.target.name]:e.target.checked}))
    }else {
      setInfo(prev => ({...prev,[e.target.name]:e.target.value}))
    }
  }
  const handleHoras = (e:React.ChangeEvent<HTMLInputElement>) => {
      setHorasExtras(prev => ({...prev,[e.target.name]:e.target.value}))
  }

  const totalHE = ():number => {
    let totalHorasExtras:any = {}

    for(const hora in horasExtras){
      switch(hora){
        case "hed":
          totalHorasExtras[hora] =Number(info.salario/230) * horasExtras[hora] * 1.25;
          break;
        case "hen":
          totalHorasExtras[hora] =Number(info.salario/230) * horasExtras[hora] * 1.75;
          break;
        case "rn":
          totalHorasExtras[hora] =Number(info.salario/230) * horasExtras[hora] * 0.35;
          break;
        case "hedd":
          totalHorasExtras[hora] =Number(info.salario/230) * horasExtras[hora] * 2;
          break;
        case "hedn":
          totalHorasExtras[hora] =Number(info.salario/230) * horasExtras[hora] * 2.5;
          break;
      }
    }
    setInfoHE(totalHorasExtras)
    const sumaTotal:any = Object.values(totalHorasExtras).reduce((acc:any,val:any) => acc + val,0)
    return sumaTotal;
  }

  useEffect(() => {
    const calculos = () => {
      setTotales({
        sueldo: Number(info.salario)/30 * Number(info.diasLaborados),
        auxilioTransporte: 200000/30* Number(info.diasLaborados),
        horasExtras:Number(totalHE()),
        EPS: ((info.salario /30) * (info.diasLaborados) + totalHE()) * .04,
        AFP:((info.salario /30) * (info.diasLaborados) + totalHE())* .04,
        totalDias:Number(info.diasLaborados)
      })
    }

    calculos()
  },[info,horasExtras,ausentismos])
  return (
    <div className='mr-5 ml-5 mt-5 w-[90%]'>
      <form action="" className='flex'>
        <div className='flex-1 pr-10 pl-10'>
          {/* información básica */}
          <div>
            <h2 className='mt-2 mb-3 text-xl text-blue-800 font-bold'>Información empleado</h2>
            <div className='mb-5 w-full'>
              <label htmlFor="" className='mr-3  mb-2 text-gray-600'>Nombre del empleado</label>
              <input className='outline-none border-b-2 border-b-gray-200 w-[70%]'  type="text" placeholder='' value={info.nombre} onChange={(e) => handleInfo(e)} name='nombre'/>
            </div>
            <div className='mb-5'>
              <label htmlFor="" className='mr-3  mb-2 text-gray-600'>Identificación del empleado</label>
              <input className='outline-none border-b-2 border-b-gray-200 w-[40%]' type="text" placeholder='' value={info.identificacion} name='identificacion' onChange={(e) => handleInfo(e)} />
            </div>
            <div className='mb-5'>
              <label className='mr-3 block mb-2 text-gray-600'>Periodicidad de pago</label>
              <label htmlFor="sem" className='mr-2 mb-2 text-gray-600'>
                <input
                  type="radio"
                  id="sem"
                  name="periodicidad"
                  value="7"
                  onChange={handleInfo}
                  checked={info.periodicidad == 7}
                  className='mr-1 w-[40px]'
                />
                Semanal
              </label>
              <label htmlFor="quin" className='mr-2 mb-2 text-gray-600'>
                <input
                  type="radio"
                  id="quin"
                  name="periodicidad"
                  value="15"
                  onChange={handleInfo}
                  checked={info.periodicidad == 15}
                  className='mr-1 w-[40px]'
                />
                Quincenal
              </label>
              <label htmlFor="men" className='mr-2 mb-2 text-gray-600'>
                <input
                  type="radio"
                  id="men"
                  name="periodicidad"
                  value="30"
                  onChange={handleInfo}
                  checked={info.periodicidad == 30}
                  className='mr-1 w-[40px]'
                />
                Mensual
              </label>
            </div>
            <div className='mb-5'>
              <label htmlFor="" className='mr-3  mb-2 text-gray-600'>Días laborados</label>
              <input className='outline-none border-b-2 border-b-gray-200 w-[50px]' type="text" placeholder='' value={info.diasLaborados} name='diasLaborados' onChange={(e) => handleInfo(e)}/>
              
                {info.periodicidad == 30 && info.diasLaborados <= 30 && info.diasLaborados >=1 ||
                info.periodicidad == 15 && info.diasLaborados <=15 && info.diasLaborados >=1 ||
                info.periodicidad == 7 && info.diasLaborados <= 7 && info.diasLaborados >=1
                
                ? <span>✅ </span>: <span>❌</span>}
              
            </div>
            <div className='pb-3'>
              <label htmlFor="" className='mr-3  mb-2 text-gray-600'>Salario del empleado (mensual)</label>
              <input className='outline-none border-b-2 border-b-gray-200 w-[40%]'  type="text" placeholder='$' value={info.salario} name='salario' onChange={(e) => handleInfo(e)}/>
            </div>
            <div className='pb-3'>
              <label htmlFor="" className='mr-3 text-gray-600'>Auxilio de transporte</label>
              <input type="checkbox" className='w-5 h-5' checked={info.auxilioTransporte} name='auxilioTransporte' onChange={(e) => handleInfo(e)}/>
            </div>
          </div>
          {/* Horas extras */}
          <div className='pb-3'>
            <h2 className='mt-2 mb-3 text-xl text-blue-800 font-bold '>Horas extras</h2>
            <div className='mb-3'>
              <label htmlFor="" className='mr-3 text-gray-600'>Hora extra diurna</label>
              <input type="number" className='outline-none border-b-2 border-b-gray-200 w-[50px]' name="hed" onChange={handleHoras} value={horasExtras.hed}/>
              <span className='mr-2'>${new Intl.NumberFormat('es-CO',{minimumFractionDigits:0,maximumFractionDigits:0}).format(infoHE.hed)}</span>
            </div>
            <div className='mb-3'>
              <label htmlFor="" className='mr-3 text-gray-600'>Hora extra nocturna</label>
              <input type="number" className='outline-none border-b-2 border-b-gray-200 w-[50px]' name="hen" onChange={handleHoras} value={horasExtras.hen}/>
              <span className='mr-2'>${new Intl.NumberFormat('es-CO',{minimumFractionDigits:0,maximumFractionDigits:0}).format(infoHE.hen)}</span>
            </div>
            <div className='mb-3'>
              <label htmlFor="" className='mr-3 text-gray-600'>Recargo nocturno</label>
              <input type="number" className='outline-none border-b-2 border-b-gray-200 w-[50px]' name="rn" onChange={handleHoras} value={horasExtras.rn}/>
              <span className='mr-2'>${new Intl.NumberFormat('es-CO',{minimumFractionDigits:0,maximumFractionDigits:0}).format(infoHE.rn)}</span>
            </div>
            <div className='mb-3'>
              <label htmlFor="" className='mr-3 text-gray-600'>Hora extra dominical diurna</label>
              <input type="number" className='outline-none border-b-2 border-b-gray-200 w-[50px]' name="hedd" onChange={handleHoras} value={horasExtras.hedd}/>
              <span className='mr-2'>${new Intl.NumberFormat('es-CO',{minimumFractionDigits:0,maximumFractionDigits:0}).format(infoHE.hedd)}</span>
            </div>
            <div className='mb-3'>
              <label htmlFor="" className='mr-3 text-gray-600'>Hora extra dominical nocturna</label>
              <input type="number" className='outline-none border-b-2 border-b-gray-200 w-[50px]' name="hedn" onChange={handleHoras} value={horasExtras.hedn}/>
              <span className='mr-2'>${new Intl.NumberFormat('es-CO',{minimumFractionDigits:0,maximumFractionDigits:0}).format(infoHE.hedn)}</span>
            </div>
          </div>
        </div>
        {/* Liquidación */}
        <div className='flex-1'>
           <h2 className='mt-2 mb-3 text-xl text-blue-800 font-bold'>Liquidación de nómina</h2>
            <div className='mb-5 border-b-gray-100 border-b-2'>
              <h3 className='mb-5'>Devengos</h3>
              <h4 className='font-light ml-5'>Total días laborados : {info.diasLaborados} días</h4>
              <h4 className='font-light ml-5'>Total sueldo: ${new Intl.NumberFormat('es-CO',{minimumFractionDigits:0,maximumFractionDigits:0}).format(totales.sueldo)} pesos colombianos</h4>
              <h4 className='font-light ml-5'>Total horas extras: ${new Intl.NumberFormat('es-CO',{minimumFractionDigits:0,maximumFractionDigits:0}).format(totales.horasExtras)}</h4>
              <h4 className='font-light ml-5'>Total auxilio de transporte: {info.auxilioTransporte ? "$" + new Intl.NumberFormat('es-CO',{minimumFractionDigits:0,maximumFractionDigits:0}).format(totales.auxilioTransporte) : "No aplica"} </h4>
            </div>

            <div className='mb-5 border-b-gray-100 border-b-2'>
              <h3 className='mb-5'>Deducciones</h3>
              <h4 className='font-light ml-5'>EPS: ${new Intl.NumberFormat('es-CO',{minimumFractionDigits:0,maximumFractionDigits:0}).format(totales.EPS)}</h4>
              <h4 className='font-light ml-5'>AFP: ${new Intl.NumberFormat('es-CO',{minimumFractionDigits:0,maximumFractionDigits:0}).format(totales.AFP)}</h4>
            </div>
            <div>
              <h3 className='mb-3'>Neto a pagar</h3>
              <h4 className='font-mono ml-5'>{info.nombre} con identificación {info.identificacion} tiene un total neto a pagar: <strong>${new Intl.NumberFormat('es-CO',{minimumFractionDigits:0,maximumFractionDigits:0}).format(totales.sueldo + totales.auxilioTransporte + totales.horasExtras - totales.EPS - totales.AFP)}</strong></h4>
            </div>
        </div>
      </form>
    </div>
  )
}

export default FormNom