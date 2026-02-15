import Image from "next/image";
import type { NextPage } from 'next';

export default function Home() {
  return (
    <main className="py-8 min-h-screen flex items-center justify-center bg-white">
    <div className='grid grid-cols-1 gap-10 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3'> 
    <div className='relative rounded-lg overflow-hidden shadow-x1 w-80 h-80'> 
        <Image 
      src="/Imgs/Kafka2.jpg"
      alt="Kafka2"
      fill 
      className="object-cover" ></Image>
      </div>
      <div className='relative rounded-lg overflow-hidden shadow-x1 w-80 h-80'> 
        <Image 
      src="/Imgs/Kafka3.jpg"
      alt="Kafka3"
      fill 
      className="object-cover" ></Image>
      </div>
     <div className='relative rounded-lg overflow-hidden shadow-x1 w-80 h-80'> 
        <Image 
      src="/Imgs/Kafka10.jpg"
      alt="Kafka10"
      fill 
      className="object-cover" >
      </Image>
      </div>
      <div className='relative rounded-lg overflow-hidden shadow-x1 w-80 h-80'> 
        <Image 
      src="/Imgs/Kafka5.jpg"
      alt="Kafka5"
      fill 
      className="object-cover" ></Image>
      </div>
      <div className='relative rounded-lg overflow-hidden shadow-x1 w-80 h-80'> 
        <Image 
      src="/Imgs/Kafka6.jpg"
      alt="Kafka6"
      fill 
      className="object-cover" ></Image>
      </div>
    <div className='relative rounded-lg overflow-hidden shadow-x1 w-80 h-80'> 
        <Image 
      src="/Imgs/Kafka7.jpg"
      alt="Kafka7"
      fill 
      className="object-cover" ></Image>
      </div>
      <div className='relative rounded-lg overflow-hidden shadow-x1 w-80 h-80'> 
        <Image 
      src="/Imgs/Kafka8.jpg"
      alt="Kafka8"
      fill 
      className="object-cover" ></Image>
      </div>
      <div className='relative rounded-lg overflow-hidden shadow-x1 w-80 h-80'> 
        <Image 
      src="/Imgs/Kafka9.jpg"
      alt="Kafka9"
      fill 
      className="object-cover" ></Image>
      </div>
      <div className="relative rounded-lg overflow-hidden shadow-xl w-80 h-80">
  <Image
    src="/Imgs/Kafka.jpg"
    alt="Kafka"
    fill 
    className="object-cover">
    </Image>
</div>
</div>
</main>
   
  );
}

