import React, { useEffect, useRef } from "react";

import '../scss/practice7.scss'
import '../scss/reset.scss'

export default function Practice7() {

    const background = useRef<HTMLDivElement>(null);
    const title = useRef<HTMLHeadingElement>(null);
    const bottom = useRef<HTMLElement>(null);

    useEffect(()=>{
        
        // var starBg = document.querySelector(".star-background");
        // var title = document.querySelector(".title");

    //스크롤 이벤트
        window.addEventListener("scroll", function(event){
            var scroll = this.scrollY;
            // moving the background faster than the title
            if (background.current){
                background.current.style.transform = "translateY("+ -scroll/3 +"px)";
            }
            // moving the title slower than the background
            if(title.current){
                title.current.style.transform = "translateY("+ scroll/1.7 +"px)";
            }
        });

        // moving to bottom after 2 sec
        let timer = setTimeout(function(){

            if(bottom.current){
                window.scrollTo({
                    top: bottom.current.offsetTop
                    ,behavior: 'smooth'
                });
                // bottom.current.scrollIntoView({ behavior: 'smooth' });
            }

        }, 2000)
        return ()=>{
            clearTimeout(timer);
        }
    },[])

    return (
        <div className="practice6">
            <div className="star-background" ref={background}></div>
            <section className="top">
                <h1 className="title" ref={title}>
                    Starry Night
                </h1>
            </section>

            <section className="bottom" ref={bottom}>
                <div className="content-wrap">
                    <ul>
                        <li><p>card</p></li>
                        <li><p>card</p></li>
                        <li><p>card</p></li>
                        <li><p>card</p></li>
                    </ul>
                    <h2>Interactive development</h2>
                </div>
            </section>
        </div>
    )
}