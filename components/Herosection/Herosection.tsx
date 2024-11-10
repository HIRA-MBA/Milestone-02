import React from 'react'
import cssStyle from "./hero.module.css"
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className={cssStyle.hero}>
      <div className={cssStyle.text}>
      <p>"I am diving into the development of AI agents, focusing on creating dynamic, intelligent applications. By leveraging HTML and CSS for foundational structure and styling, TypeScript for type-safe coding, and Next.js for efficient rendering and routing, I am learning to build robust, interactive applications that showcase AI capabilities. Through this project, I aim to understand how AI agents can enhance user experiences by adapting in real time, processing user interactions, and providing intuitive responses. This hands-on experience is allowing me to explore both the technical and creative aspects of AI in web development, sharpening my skills across various frontend technologies while deepening my understanding of AI's role in modern applications."</p>
      </div>    
    

      
    </div>
  )
}

export default HeroSection
