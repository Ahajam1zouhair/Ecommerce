import React from 'react'
import ControlledCarousel from './carousel/Carousel'
import NewProudact from './ProdactNew/NewProudact'
import ProdactCousin from './ProudactCousin/ProdactCousin'
import Promotions from './Promotions/Promotions'
import ProdactElectronics from './ProudactElectronics/ProudactElectronics'


export default function Home() {
  return (
    <div  className="p-3"> 
  <ControlledCarousel/>
  <NewProudact/>
  <ProdactCousin/>
  <ProdactElectronics/>
  <Promotions/>

    </div>
  )
}
