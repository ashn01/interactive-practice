import { gsap, Power3, Power4 } from 'gsap';
import react, { useEffect, useRef, useState } from 'react'
import {CSSPlugin} from 'gsap/all'

import '../scss/reset.scss'
import '../scss/practice11.scss';

export default function Practice11() {

    const wrapRef = useRef<HTMLDivElement>(null);
    // window size
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        resize();
        gsap.registerPlugin(CSSPlugin)

        window.addEventListener('resize', resize);
        if (isMobile()){
            window.addEventListener("deviceorientation", e=>mobilemove(e));
        }
        else{
            window.addEventListener("mousemove",e => mousemove(e));
        }

        moveEvent();
        initEvent();

        return () => {
            console.log("remove event resize")
            window.removeEventListener('resize', resize);
            console.log("remove event mousemove")
            window.removeEventListener('mousemove', mousemove);
            console.log("remove event deviceorientation")
            window.removeEventListener('deviceorientation', mobilemove);
        }
    }, [])

    useEffect(() => {
        
    }, [width, height])


    const initEvent = () => {

    }
    let x = 0;
    let y = 0;
    let ax = 0;
    let ay = 0;
    const mousemove = (event:MouseEvent) =>{
        x = event.clientX - window.innerWidth / 2
        y = event.clientY - window.innerHeight / 2
    }

    const moveEvent = () =>{
        ax += (x-ax) * .05;
        ay += (y-ay) * .05;
        
        if(wrapRef.current){
            wrapRef.current.style.transform = `
                translate3d(-50%, -50%, 0) 
                rotateX(${isMobile() ? ay - 50 : ay/10}deg) 
                rotateY(${isMobile() ? ax : (-ax/10)}deg)
            `; 
            window.requestAnimationFrame(moveEvent)
        }
    }

    const mobilemove = (event:any) => {
        x = event.gamma;
        y = event.beta;
    }

    const isMobile = () => {
        var mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
        for (var info in mobileKeyWords) {
            if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
                return true;
            }
        }
        return false;
    }

    const resize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div className="practice11" >
            <div className="content-wrap active" ref={wrapRef}>
                <div className="front">
                    <h1></h1>
                    <div className="sun"></div>
                    <div className="cloud1"></div>
                    <div className="cloud2"></div>

                    <div className="m1"></div>
                    <div className="m2"></div>
                    <div className="snow"></div>
                    <div className="m3"></div>
                    <div className="cow"></div>
                </div>

                <div className="back">
                    <p className="message">
                        Hello world
                    </p>
                    <h3>from. YMK</h3>
                </div>
            </div>
        </div>
    )
}