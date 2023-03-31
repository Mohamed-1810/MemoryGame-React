

import { useState } from 'react';
import Card from './Card';

function Cards()
{
    const [lives,setlives]= useState(5);
    const [items, setItems] = useState([
        { id: 1, img: '/img/html.png', stat: "" },
        { id: 1, img: '/img/html.png', stat: "" },
        { id: 2, img: '/img/css.png', stat: "" },
        { id: 2, img: '/img/css.png', stat: "" },
        { id: 3, img: '/img/js.png', stat: "" },
        { id: 3, img: '/img/js.png', stat: "" },
        { id: 4, img: '/img/scss.png', stat: "" },
        { id: 4, img: '/img/scss.png', stat: "" },
        { id: 5, img: '/img/react.png', stat: "" },
        { id: 5, img: '/img/react.png', stat: "" },
        { id: 6, img: '/img/vue.png', stat: "" },
        { id: 6, img: '/img/vue.png', stat: "" },
        { id: 7, img: '/img/angular.png', stat: "" },
        { id: 7, img: '/img/angular.png', stat: "" },
        { id: 8, img: '/img/nodejs.png', stat: "" },
        { id: 8, img: '/img/nodejs.png', stat: "" }
    ].sort(()=> Math.random() - 0.5))
    
    const [prev,setPrev]=useState(-1);

    function check(current)
    {
        if(items[current].id==items[prev].id)
        {
            items[current].stat="correct"
            items[prev].stat="correct"
            setPrev(-1)

        }
        else 
        {
            items[current].stat="wrong"
            items[prev].stat="wrong"
            setItems([...items])
            setTimeout(()=>{
                items[current].stat=""
                items[prev].stat=""
                setItems([...items])        
                setPrev(-1)
            },1000)
            var demo=lives-1;
            setlives(demo);
        }
        if(lives===0)
        {
            document.getElementsByClassName('game')[0].style.display='none';
            document.getElementsByClassName('finish')[0].style.display='flex';
            
            document.getElementsByClassName('finish')[0].style.flexDirection='column';
        }
    }
    
    function handleClick(id)
    {
        if(prev==-1)
        {
            items[id].stat="active"
            setItems([...items])
            setPrev(id)
        }
        else{
            check(id)
        }
        
    }

    return (
        <div>
        <div className='lives'>Lives:{lives}</div>
        
        <div className="container">
            { items.map((item, index) =>(
            <Card key={index} item={item} id={index} handleClick={handleClick}/>
         ))}
        </div>
        
        </div>
    )
}

export default Cards;