import React, { useEffect, useState } from "react";

import '../scss/practice3.scss'

export default function Practice3() {
    const [pageNum, setPageNum] = useState<number>(0);
    const [totalNum, setTotalNum] = useState<number>(8);

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
            // section[i].className = "";
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
        <div className="practice3">
            <ul className="pointWrap">
                {
                    [...Array(totalNum)].map((value, key) => {
                        return <li onClick={() => liAction(key)} key={`li-action-${key}`}></li>
                    })
                }
            </ul>

            <section>
                <h1>Page Title</h1>
            </section>

            <section>
                <div className="innerWrap">
                    <h2>page 1</h2>
                    <p>Sketch</p>
                </div>
                <img src="./images/pic_1.jpg" className="image" alt="Nike sketch" />
            </section>

            <section>
                <div className="innerWrap">
                    <h2>page 2</h2>
                    <p>Use lines</p>
                </div>
                <img src="./images/pic_2.jpg" className="image" alt="" />
            </section>

            <section>
                <div className="innerWrap">
                    <h2>page 3</h2>
                    <p>Add colors</p>
                </div>
                <img src="./images/pic_3.jpg" className="image" alt="" />
            </section>

            <section>
                <div className="innerWrap">
                    <h2>page 4</h2>
                    <p>Add black color</p>
                </div>
                <img src="./images/pic_4.jpg" className="image" alt="" />
            </section>

            <section>
                <div className="innerWrap">
                    <h2>page 4</h2>
                    <p>Add point colors</p>
                </div>
                <img src="./images/pic_5.jpg" className="image" alt="" />
            </section>

            <section>
                <div className="innerWrap">
                    <h2>page 4</h2>
                    <p>Finalize</p>
                </div>
                <img src="./images/pic_6.jpg" className="image" alt="" />
            </section>

            <section>
                <div className="innerWrap">
                    <h2>page 4</h2>
                    <p>Add stitch</p>
                </div>
                <img src="./images/pic_7.jpg" className="image" alt="" />
            </section>
        </div>
    )
}