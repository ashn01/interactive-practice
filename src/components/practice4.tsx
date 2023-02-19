import React, { useEffect, useState } from "react";

import '../scss/practice4.scss'

export default function Practice4() {
    const [pageNum, setPageNum] = useState<number>(0);
    const [totalNum, setTotalNum] = useState<number>(4);

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent)
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        }
    }, [])

    useEffect(() => {
        console.log(`pageNum: ${pageNum}`)
        var section = document.getElementsByTagName("section");
        var pointBtn = document.querySelectorAll('.pointWrap li');

        for (var i = 0; i < totalNum; i++) {
            section[i].classList.remove("active");
            // section[i].classNameName = "";
            pointBtn[i].classList.remove("active");
        }
        section[pageNum].classList.add("active");
        pointBtn[pageNum].classList.add("active");
    }, [pageNum])

    const scrollEvent = (event: any) => {
        var scroll = document.documentElement.scrollTop;
        var section = document.getElementsByTagName("section");

        for (let i = 0; i < totalNum; i++) {
            if (scroll > section[i].offsetTop - window.outerHeight / 1.5 &&
                scroll < section[i].offsetTop - window.outerHeight / 3 + section[i].offsetHeight) {
                setPageNum(i);
                // console.log(i)
                break;
            }
        }
    }

    const liAction = (index: number) => {
        var section = document.getElementsByTagName("section");

        console.log(index);
        setPageNum(index);
        window.scrollTo({
            top: section[index].offsetTop,
            behavior: 'smooth',
        })
    }


    return (
        <div className="practice4">
            <ul className="pointWrap">
                {
                    [...Array(totalNum)].map((value, key) => {
                        return <li onClick={() => liAction(key)} key={`li-action-${key}`}></li>
                    })
                }
            </ul>

            <section>
                <h1>NIKE Sneakers</h1>
            </section>

            <section>
                <div className="innerWrap">
                    <h2>Nike Blazer Mid '77 Vintage</h2>
                    <p>In the '70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid '77 Vintage—classic since the beginning.</p>
                </div>
                <div className="imageWrap">
                    <img src="./images/nike_1_1.JPG" alt="Blazer Mid" />
                    <img src="./images/nike_1_2.JPG" alt="Blazer Mid" />
                </div>
            </section>

            <section>
                <div className="innerWrap">
                    <h2>Nike Air Max 95</h2>
                    <p>Taking inspiration from the human body and '90s athletics aesthetics, the Nike Air Max 95 mixes unbelievable comfort with fast-paced style. Wavy side panels add natural flow to any outfit while visible Nike Air cushioning in the heel and forefoot delivers comfort you have to feel to believe. Plus, reflective design details decorated with movement-inspired tonal Swoosh logos add a touch of fresh energy.</p>
                </div>
                <div className="imageWrap">
                    <img src="./images/nike_2_1.JPG" alt="Air Max 95" />
                    <img src="./images/nike_2_2.JPG" alt="Air Max 95" />
                </div>
            </section>

            <section>
                <div className="innerWrap">
                    <h2>Nike React Vision</h2>
                    <p>From the D/MS/X collection comes a story of surreal comfort. Layered textures, intricate lines and vivid colours combine in a design influenced by the exaggerated world of our dreams. React foam and an ultra-plush tongue provide dreamlike comfort. Step into your dream with the Nike React Vision.</p>
                </div>
                <div className="imageWrap">
                    <img src="./images/nike_3_1.JPG" alt="React Vision" />
                    <img src="./images/nike_3_2.JPG" alt="React Vision" />
                </div>
            </section>
        </div>
    )
}