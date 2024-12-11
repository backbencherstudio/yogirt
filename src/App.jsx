import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import FooterHeader from './components/footer/FooterHeader'
import FormSchedule from './components/Form-schedule/FormSchedule'
import ClientTestimonials from './components/client-testimonials/ClientTestimonials'
import CaseStudies from './components/Case-studies/CaseStudies'

function App() {


  return (
    <>
     <CaseStudies></CaseStudies>
    <ClientTestimonials></ClientTestimonials>
    {/* <FormSchedule></FormSchedule> */}
    <FooterHeader></FooterHeader>
      <Footer></Footer>
    </>
  )
}

export default App
