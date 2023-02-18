import React, { useEffect, useState } from "react";

import '../scss/practice1.scss'

export default function Practice1() {

    const [pageNum, setPageNum] = useState<number>(0);
    const [totalNum, setTotalNum] = useState<number>(4);
    const [bgColorArr, setBgColorArr] = useState<Array<string>>(["#85FFBD", "#FFFB7D", "#E0C3FC", "#00DBDE"]);


    useEffect(()=>{
        window.addEventListener("scroll", scrollEvent)

        return ()=>{
            window.removeEventListener("scroll", scrollEvent);
        }
    },[])

    const scrollEvent = (event:any)=>{
        var scroll = document.documentElement.scrollTop;
        var section = document.getElementsByTagName("section");

        console.log("scroll event")

        for (let i = 0; i<totalNum; i++){
            if(scroll > section[i].offsetTop - window.outerHeight/1.5 &&
                scroll < section[i].offsetTop - window.outerHeight/3 + section[i].offsetHeight){
                    setPageNum(i);
                    break;
            }
        }
    }

    const buttonAction = (param:number) =>{
        let curPage = pageNum+param;
        var section = document.getElementsByTagName("section");

        if (curPage >= 0 && curPage < totalNum) {
            window.scrollTo({
                top: section[curPage].offsetTop,
                behavior: 'smooth',
            })
        }else{
            window.scrollTo({
                top: section[pageNum].offsetTop,
                behavior: 'smooth',
            })
        }
    }

    // const nextBtn = () =>{
    //     if(pageNum < totalNum-1){
    //         let curPage = pageNum+1;
    //         // setPageNum(curPage);
    //         // pageChangeFunc();
    //         var section = document.getElementsByTagName("section");
    //         window.scrollTo({
    //             top: section[curPage].offsetTop,
    //             behavior: 'smooth',
    //         })
    //     }
    // }

    // const pageChangeFunc = () =>{
    //     // var section = document.getElementsByTagName("section");
    //     // window.scrollTo({
    //     //     top: section[pageNum].offsetTop,
    //     //     behavior: 'smooth',
    //     // })
    // }

    return (
        <div style={{backgroundColor:bgColorArr[pageNum]}}>
            <div className="navi">
                <button type="button" className="prevBtn" onClick={()=>buttonAction(-1)}>PREV</button>
                <button type="button" className="nextBtn" onClick={()=>buttonAction(1)}>NEXT</button>
                <h1>{pageNum+1} 페이지 입니다.</h1>
            </div>

            <section>
                <h2>page 1</h2>
            </section>

            <section>
                <h2>page 2</h2>
            </section>

            <section>
                <h2>page 3</h2>
            </section>

            <section>
                <h2>page 4</h2>
            </section>
        </div>
    )
}