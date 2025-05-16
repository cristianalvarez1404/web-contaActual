import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='h-screen'>
      <div className='w-[95%] p-2 m-auto'>
        <h2 className='font-bold mb-5 text-2xl'>Novedades tributarias</h2>
        <div className='w-full border-2 border-gray-300 p-3'>
          <h2 className='font-bold'>Tratamiento fiscal del impuesto de industria y comercio en el impuesto de renta y complementarios año 2025 (año gravable 2024)</h2>
          <p>
            Según el concepto CONCEPTO 002065 int 211 DE 2025 se fundamenta el problema jurídico frente a la deducción del impuesto de industria y comercio en el impuesto de renta y complementarios, concluyendo que dicho impuesto (ICA) es procedente como deducción siempre y cuando se cumplan 2 condiciones:
              <em>(i) que el tributo tenga una relación de causalidad con la actividad productora de renta del contribuyente y (ii) que su pago efectivo se hay a efectuado antes de la presentación de la declaración inicial del impuesto sobre la renta.</em>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home