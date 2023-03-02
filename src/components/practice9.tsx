import { gsap, Power3, Power4 } from 'gsap';
import react, { useEffect, useRef, useState } from 'react'
import {CSSPlugin} from 'gsap/all'

import '../scss/practice9.scss';

export default function Practice9() {

    const [cards, setCards] = useState<Array<string>>(["CARD", "CARD", "CARD", "CARD", "CARD"])
    const [buttons, setButtons] = useState<Array<string>>(["No 1", "No 2", "No 3", "No 4"])
    const [button, setButton] = useState<number>(0)

    const sectionRef = useRef<HTMLElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    // window size
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight);
        gsap.registerPlugin(CSSPlugin)

        window.addEventListener('resize', resize);
        initEvent();
        buttonEvent(0)
        return () => {
            console.log("remove event resize")
            window.removeEventListener('resize', resize);
        }
    }, [])

    useEffect(() => {

    }, [width, height])

    useEffect(() => {
        console.log(button)
        buttonEvent(button);
    }, [button])


    const initEvent = () => {
        gsap.from("h1", 1, {
            top: -50,
            autoAlpha: 0,
            ease: Power3.easeOut
        })

        if (buttonsRef.current) {
            buttonsRef.current.childNodes.forEach((button, i) => {
                gsap.from(button, .4, {
                    top: 100,
                    ease: Power3.easeInOut,
                    delay: i * .1 + 1
                })
            })
        }

    }

    const resize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    const buttonEvent = (action: number) => {
        if (sectionRef.current) {
            switch (action) {
                case 0:
                    sectionRef.current.childNodes.forEach((item, i) => {
                        gsap.to(item, 1, {
                            top: height / 2 - i * 40,
                            left: width / 2 + i * 40 - 200,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0,
                            ease: Power3.easeInOut,
                            delay: i * .2
                        })
                    })
                    break;
                case 1:
                    sectionRef.current.childNodes.forEach((item, i) => {
                        gsap.to(item, 1, {
                            top: Math.random() * (height - 300) + 100,
                            left: Math.random() * (width - 300) + 100,
                            rotationX: "random(-60, 60)",
                            rotationY: "random(-60, 60)",
                            rotationZ: "random(-90, 90)",
                            ease: Power4.easeInOut,
                            delay: "random(0,.5)"
                        })
                    })
                    break;
                case 2:
                    sectionRef.current.childNodes.forEach((item, i) => {
                        gsap.to(item, 1, {
                            top: height / 2 + i * 30 - 100,
                            left: width / 2 - i * 80,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 20 * i,
                            ease: Power4.easeInOut,
                            delay: i * .15
                        })
                    })
                    break;
                case 3:
                    sectionRef.current.childNodes.forEach((item, i) => {
                        gsap.to(item, 1, {
                            top: i<2 ? 
                                    0 : 
                                    (i==4 ? height/2-70 : height-140)
                                    ,
                            left: i%2 == 1 ? 
                                    0 : 
                                    (i==4 ? width/2-115 : width-230),
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0,
                            ease: Power4.easeInOut,
                            delay: i * .15
                        })
                    })
                    break;
            }
        }
    }

    return (
        <div className="practice9">
            <h1>Card effect</h1>
            <section ref={sectionRef}>
                {
                    cards.map((value, key) => {
                        return (
                            <div className="card-item" key={`card-${key}`}>
                                {value}
                            </div>
                        )
                    })
                }
            </section>
            <div className="button-wrap" ref={buttonsRef}>
                {
                    buttons.map((value, key) => {
                        return (
                            <button type="button" 
                                onClick={() => {
                                    if(key == button){
                                        buttonEvent(key)
                                    }else{
                                        setButton(key)
                                    }
                                }} 
                                key={`button-${key}`}
                                className={`${button==key?"active":""}`}>
                                    {value}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}