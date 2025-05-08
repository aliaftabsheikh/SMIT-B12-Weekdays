import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const CarouselComponent = () => {
  return (
    <div className='w-1/2 flex justify-center'>

    <Carousel>
    <CarouselContent>
      <CarouselItem>1</CarouselItem>
      <CarouselItem>2</CarouselItem>
      <CarouselItem>3</CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
    </div>
  
  )
}

export default CarouselComponent