import { gsap, Power3, Power4 } from 'gsap';
import react, { useEffect, useRef, useState } from 'react'
import {CSSPlugin} from 'gsap/all'

import '../scss/reset.scss'
import '../scss/practice10.scss';

export default function Practice10() {

    const [bgs, setBgs] = useState<Array<string>>(["#2eccc4", "#ea204f", "#20a9ea"])
    const [numbers, setNumbers] = useState<number>(100);
    const [textSize, setTextSize] = useState<number>(30);
    const [buttons, setButtons] = useState<Array<string>>(["No 1", "No 2", "No 3"])
    const [button, setButton] = useState<number>(0)

    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    // window size
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        resize();
        gsap.registerPlugin(CSSPlugin)

        window.addEventListener('resize', resize);
        initEvent();
        buttonEvent(0)

        // create texts
        if(sectionRef.current){
            let textItem
            for(let i=0;i<numbers;i++){
                textItem = document.createElement("div");
                textItem.setAttribute("class", "text-item");
                textItem.style.top = window.innerHeight / 2 + "px";
                textItem.style.left = window.innerWidth / 2 + "px";
                textItem.innerHTML = i.toString();
                sectionRef.current.appendChild(textItem);
            }
        }

        return () => {
            console.log("remove event resize")
            window.removeEventListener('resize', resize);
        }
    }, [])

    useEffect(() => {
        buttonEvent(button);
    }, [width, height])

    useEffect(() => {
        buttonEvent(button);
    }, [button])

    const gsapRandom = (item:ChildNode) => gsap.to(item, 1, {
        top: Math.random() * (height - 150) + 50,
        left: Math.random() * (width - 150) + 50,
        rotationX: "random(-60, 60)",
        rotationY: "random(-60, 60)",
        rotationZ: "random(-90, 90)",
        scale: 1,
        autoAlpha: 1,
        ease: Power4.easeInOut,
        delay: "random(0,.5)"
    })


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
                    overflowY: "hidden",
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
        if(containerRef.current){
            containerRef.current.style.background = bgs[action];
        }

        
        if (sectionRef.current) {
            gsap.killTweensOf(sectionRef.current.childNodes);

            switch (action) {
                case 0:
                    sectionRef.current.childNodes.forEach((item, i) => {
                        gsap.to(item, 1, {
                            top: Math.random() * (height - 150) + 50,
                            left: Math.random() * (width - 150) + 50,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0,
                            autoAlpha: "random(.1, 1)",
                            scale: .5,
                            ease: Power4.easeOut,
                            delay: "random(0, .5)"
                        })
                    })
                    break;
                case 1:
                    sectionRef.current.childNodes.forEach((item, i) => {
                        gsapRandom(item)
                    })
                    break;
                case 2:
                    sectionRef.current.childNodes.forEach((item, i) => {
                        let nextLine = Math.floor((i*textSize) / (width-textSize));
                        gsap.to(item, 1, {
                            top: height / 5 + Math.sin(i/3) * 40 + nextLine* height/5,
                            left: (i*textSize) % (width-textSize) + textSize,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0,
                            autoAlpha: 1,
                            scale: .5,
                            ease: Power4.easeInOut,
                            delay: i * .02
                        })
                    })
                    break;
            }
        }
    }

    return (
        <div className="practice10" ref={containerRef}>
            <h1>Card effect</h1>
            <section ref={sectionRef}>

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