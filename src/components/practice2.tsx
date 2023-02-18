

import { useEffect, useState } from 'react';
import '../scss/practice2.scss'

export default function Practice2() {

    const [pageNum, setPageNum] = useState<number>(0);
    const [totalNum, setTotalNum] = useState<number>(5);
    

    useEffect(()=>{
        console.log("useState")
        window.addEventListener("scroll", scrollEvent)

        pageChange();

        return ()=>{
            window.removeEventListener("scroll", scrollEvent);
        }
    },[])

    useEffect(()=>{
        console.log(`pageNum: ${pageNum}`)
        var section = document.getElementsByTagName("section");
        for (let i=0;i<totalNum;i++){
            section[i].classList.remove("active");
        }
        section[pageNum].classList.add("active");
    },[pageNum])

    const scrollEvent = (event:any)=>{
        var scroll = document.documentElement.scrollTop;
        var section = document.getElementsByTagName("section");

        for (let i = 0; i<totalNum; i++){
            if(scroll > section[i].offsetTop - window.outerHeight/1.5 &&
                scroll < section[i].offsetTop - window.outerHeight/3 + section[i].offsetHeight){
                    setPageNum(i);
                    // console.log(i)
                    break;
            }
        }
        pageChange();
    }

    const pageChange = () =>{
        // var section = document.getElementsByTagName("section");
        // for (let i=0;i<totalNum;i++){
        //     section[i].classList.remove("active");
        // }
        // console.log(pageNum)
        // section[pageNum].classList.add("active");
    }


    return (
        <div className="practice2">
            <section>
                <h1>Title</h1>
            </section>

            <section>
                <div className="innerWrap">
                    <h2>page 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed enim dolor. Donec vel sem ex. Etiam pulvinar, justo blandit elementum placerat, velit quam sodales felis, auctor tincidunt mauris arcu at metus. Donec porttitor est sit amet tincidunt tempus. Aliquam vitae arcu tincidunt, consectetur sem vitae, mollis tellus. Nullam imperdiet orci a purus ullamcorper, et aliquam ipsum gravida. Cras ornare velit quam, quis consequat arcu sollicitudin eget. Sed non ipsum nec est luctus porttitor eu pellentesque neque. Phasellus placerat cursus felis sed eleifend. Ut ac scelerisque nulla, eu fermentum libero. Etiam vitae lectus et nisi vestibulum dignissim. Cras ut posuere mi. Fusce ut elit non dui venenatis scelerisque suscipit a quam. Pellentesque suscipit orci dui, quis viverra augue gravida et. Aenean euismod, dolor quis suscipit iaculis, orci tellus sagittis justo, quis efficitur lacus nisl nec odio.</p>
                </div>
                <img src="./images/sample1.png" className="image" alt="" />
            </section>

            <section>
                <div className="innerWrap">
                    <h2>page 2</h2>
                    <p>Sed quis faucibus tortor. Proin ut est nibh. Nulla non ullamcorper lacus. Proin dapibus consequat urna in porttitor. Nam et bibendum leo. Integer auctor efficitur nisi, sit amet sagittis urna viverra sed. In id molestie nunc. Vivamus non nibh cursus, mattis justo in, pharetra turpis. Nam ornare ultrices velit eget vehicula. Maecenas dui ex, iaculis nec odio nec, vehicula gravida erat. In laoreet posuere lorem laoreet vehicula. Praesent ornare in metus quis posuere.</p>
                </div>
                <img src="./images/sample2.png" className="image" alt="" />
            </section>

            <section>
                <div className="innerWrap">
                    <h2>page 3</h2>
                    <p>Vivamus vulputate lorem vitae urna dictum accumsan. Nullam vitae nisi interdum, fermentum nisl a, fermentum sem. Cras dictum nibh vel orci interdum, in vestibulum ex aliquet. Duis mollis, orci vel cursus sodales, sem nulla vestibulum sapien, nec hendrerit turpis arcu non odio. Quisque et neque eros. Aliquam erat volutpat. Aenean sollicitudin gravida velit, quis rhoncus mauris blandit non. Vestibulum eleifend est a ante ornare, nec placerat tellus pretium. Maecenas id velit in arcu ornare fermentum. Cras scelerisque commodo nunc eu tristique.</p>
                </div>
                <img src="./images/sample3.png" className="image" alt="" />
            </section>

            <section>
                <div className="innerWrap">
                    <h2>page 4</h2>
                    <p>Nulla facilisi. Aliquam ornare ornare congue. Aenean suscipit, eros a interdum pharetra, sapien sem tempor tortor, vitae sodales tortor turpis viverra nisi. Maecenas non arcu ligula. Quisque sit amet pretium lorem. Integer lacinia erat nec felis finibus eleifend. Sed imperdiet, nunc sit amet efficitur molestie, enim mauris condimentum purus, a venenatis felis augue eleifend ipsum. Phasellus sed porta nulla, at ultricies orci. Vestibulum nec sem quis ex aliquam rutrum. Duis pretium dolor eros, et vulputate augue feugiat ac.</p>
                </div>
                <img src="./images/sample4.png" className="image" alt="" />
            </section>
        </div>
    )
}