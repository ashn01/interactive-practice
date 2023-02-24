import { gsap, Power3, Power4 } from 'gsap';
import react, { useEffect, useRef, useState } from 'react'

import '../scss/practice8.scss';

export default function Practice8(){

    const [cards, setCards] = useState<Array<string>>(["CARD","CARD","CARD","CARD","CARD"])
    const sectionRef = useRef<HTMLElement>(null);
    // window size
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(()=>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight);

        window.addEventListener('resize', resize);
        setting();

        return () => {
            console.log("remove event resize")
            window.removeEventListener('resize', resize);
        }
    },[])

    useEffect(()=>{
        setting();
    },[width, height])

    const resize = () =>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    const setting = () =>{
        if(sectionRef.current){
            sectionRef.current.childNodes.forEach((item, i)=>{
                gsap.to(item, 1, {
                    top: height / 2 - i * 40,
                    left: width  / 2 + i * 40 -200,
                    rotation:0,
                    ease: Power3.easeInOut,
                    delay: i*.2
                })
            })
        }
    }

    const randomButton = () =>{
        if(sectionRef.current){
            sectionRef.current.childNodes.forEach((item, i)=>{
                gsap.to(item, 1, {
                    top: Math.random() * height,
                    left: Math.random() * width,
                    rotation:Math.random() * 180,
                    ease: Power4.easeInOut,
                    delay: i*.1
                })
            })
        }
    }

    return (
        <div className="practice8">
            <h1>Card effect</h1>
            <section ref={sectionRef}>
                {
                    cards.map((value, key)=>{
                        return (
                            <div className="card-item" key={`card-${key}`}>
                                {value}
                            </div>
                        )
                    })
                }
            </section>
            <div className="button-wrap">
                <button type="button" onClick={randomButton}>Random</button>
                <button type="button" onClick={setting}>Reset</button>
            </div>
        </div>
    )
}