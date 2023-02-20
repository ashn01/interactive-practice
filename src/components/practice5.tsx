import React, { useEffect, useState } from "react";

import '../scss/practice5.scss'
import '../scss/reset.scss'

interface Album {
    image:string,
    url:string,
    name:string,
    colors:Array<string>,
}


export default function Practice5(){

    const [albums, setAlbums] = useState<Array<Album>>([
        {image:'iu_0.jpg', url:'https://www.youtube.com/watch?v=nM0xDI5R50E', name:'IU', colors:["#0272a4","#f6a564"]},
        {image:'iu_1.jpg', url:'https://www.youtube.com/watch?v=Ub6IyAOTwr8', name:'IU', colors:["#b6bfc8","#36595b"]},
        {image:'iu_2.jpg', url:'https://www.youtube.com/watch?v=D1PvIWdJ8xo', name:'IU', colors:["#e58e82","#6f569f"]},
    ]);

    const [page, setPage] = useState<number>(0);

    useEffect(()=>{
        let isMobile = mobileChk();
        console.log(isMobile);
    },[])

    // prev, next button event
    const pageButton = (index:number) =>{
        let maxLength = albums.length-1;
        let pageNum = page+index < 0 ? maxLength :(page+index)%albums.length;
        setPage(pageNum);
    }

    // mobile
    const mobileChk = ()=>{
        var mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
        for (var info in mobileKeyWords) {
            if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
                return true;
            }
        }
        return false;
    }


    // mobile touch event
    let startX=0;
    let endX=0;
    const mobileTouch = (event:any) =>{
        // console.log(event.type)
        let type = null;
        let touch = null;

        switch(event.type){
            case "touchstart":
                type="mousedown";
                touch= event.changedTouches[0];
                startX = touch.clientX;
                endX=0;
                break;
            case "touchend": 
                type="mouseup";
                touch= event.changedTouches[0];
                endX = touch.clientX;
                
                let checkMove = startX - endX;
                let moveAbsolute = Math.abs(checkMove);

                if(moveAbsolute > 100){
                    if(checkMove < 0){
                        pageButton(-1)
                    }else{
                        pageButton(1)
                    }
                }
                break;   
        }
    }

    return (
        <div className="practice5">
            <article className="content-wrap" 
                style={{background: `linear-gradient(120deg, ${albums[page].colors[0]}, ${albums[page].colors[1]})`}}
                onTouchStart={(event)=>mobileTouch(event)}
                onTouchEnd={(event)=>mobileTouch(event)}
            >
                {
                    albums.map((album, key)=>{
                        return (
                            <section className={`album ${page == key ? "active" : ""}`} key={`album-${key}`}>
                                <div className="disk">  
                                    <div className="inner-disk"></div>
                                </div>
                                <a href={album.url} className="cover-image">
                                    <img src={`./images/${album.image}`}/>
                                </a>
                            </section>
                        )
                    })
                }
            </article>
            
            <div className="button-wrap">
                <button type="button" onClick={()=>pageButton(-1)}>PREV</button>
                <ul className="point-wrap">
                    {
                        albums.map((album, key)=>{
                            return (
                                <li className={page == key ? "active" : ""} key={`list-${key}`}></li>
                            )
                        })
                    }
                </ul>
                <button type="button" onClick={()=>pageButton(+1)}>NEXT</button>
            </div>
        </div>
    )
}
