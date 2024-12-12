import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import FooterHeader from './components/footer/FooterHeader'

import ClientTestimonials from './components/client-testimonials/ClientTestimonials'
import CaseStudies from './components/Case-studies/CaseStudies'
// import Chooses from './components/choose-section/Chooses'
import FormSchedule from './components/Form-schedule/FormSchedule'
import ProjectShowcase from './components/case-studies/CaseStudies2'

function App() {


  return (
    <>
     <CaseStudies></CaseStudies>
    <ClientTestimonials></ClientTestimonials>
    <FormSchedule></FormSchedule>
    <FooterHeader></FooterHeader>
      <Footer></Footer>
    </>
  )
}

export default App
