import React, { useEffect, useRef } from "react";
import { gsap, Power3, Power4 } from 'gsap';
import { ScrollToPlugin } from "gsap/all";


import '../scss/practice7.scss'
import '../scss/reset.scss'

export default function Practice7() {

    const background = useRef<HTMLDivElement>(null);
    const title = useRef<HTMLHeadingElement>(null);
    const bottom = useRef<HTMLElement>(null);

    useEffect(() => {
        window.addEventListener("scroll", function (event) {
            var scroll = this.scrollY;
            // moving the background faster than the title
            if (background.current) {
                background.current.style.transform = "translateY(" + -scroll / 3 + "px)";
            }
            // moving the title slower than the background
            if (title.current) {
                title.current.style.transform = "translateY(" + scroll / 1.7 + "px)";
            }
        });

        // scroll plugin required
        gsap.registerPlugin(ScrollToPlugin)

        textEvent();
        scrollToBottom();
        biggerCard();

        return () => {
            
        }
    }, [])

    // text event
    const textEvent = () =>{
        if(title.current){
            let textItems = title.current.querySelectorAll('div')
            for(let i=0;i<textItems.length;i++){
                let text = textItems[i];

                gsap.from(text, 1, {
                    autoAlpha: 0,
                    scale: 0.5,
                    delay: Math.random()*1,
                    ease: Power3.easeInOut
                });
            }
        }
    }

    // scroll to the bottom of the page
    const scrollToBottom = () =>{
        gsap.to(window, 2, { // scroll to the bottom after 1.7 sec
            scrollTo: {
                y: ".bottom"
            },
            delay: 1.7,
            ease: Power4.easeInOut
        })
    }

    // bigger card
    const biggerCard = () =>{
        gsap.from(".bottom", 2.5, {
            scale: .7,
            y:100,
            delay: 2.2,
            ease: Power3.easeInOut
        })
    }

    // top button event
    const topButton = () =>{
        gsap.to(window, 1.5, {
            scrollTo: {
                y:0
            },
            ease:Power3.easeInOut
        })
    }

    return (
        <div className="practice7">
            <div className="star-background" ref={background}></div>
            <section className="top">
                <h1 className="title" ref={title}>
                    <div>S</div>
                    <div>T</div>
                    <div>A</div>
                    <div>R</div>
                    <div>R</div>
                    <div>Y&nbsp;</div>
                    <div>N</div>
                    <div>I</div>
                    <div>G</div>
                    <div>H</div>
                    <div>T</div>
                </h1>
            </section>

            <section className="bottom">
                <div className="content-wrap">
                    <ul>
                        <li><p>card</p></li>
                        <li><p>card</p></li>
                        <li><p>card</p></li>
                        <li><p>card</p></li>
                    </ul>
                    <h2>Interactive Development</h2>
                </div>
                <button type="button" className="top-button" onClick={topButton}>TOP</button>
            </section>
        </div>
    )
}