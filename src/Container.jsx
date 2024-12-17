import React from 'react';
import china from './assets/world (1).png'
import philippine from './assets/world.png'
import Likes from './assets/heart.png'

function Container(props) {
    let [count, setCount] = React.useState(0)
    let [chinaCount, setChina] = React.useState(0)


    let philippineX = Math.floor(Math.random() * 5000)
    let chinaX = Math.floor(Math.random() * 5000)

    React.useEffect(() => {
        
        const count = setInterval(() => {
            let ph = Math.floor(Math.random() * 15)
            setCount(prev => prev += Number(ph))
        }, Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000);
    
        return () => {
            clearInterval(count)
        }
    }, [])

    React.useEffect(() => {
        
        const count = setInterval(() => {
            let ch = Math.floor(Math.random() * 15)
            setChina(prev => prev += Number(ch))
        }, Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000) //Can you make the speed
    
        return () => {
            clearInterval(count)
        }
    }, [])

    const render = (img, name, count) => {
        return (
            <>
                <div className='border-4 border-white rounded-xl p-5'>
                    <div className=' flex items-center justify-center border-b-4 border-white pb-5 flex-col'>
                        <img className='w-2/5' src={img} />
                        <p className='font-bold text-2xl text-white mt-3'>{name}</p>
                    </div>
                    <div className='flex items-center justify-center gap-5 mt-5'>
                        <img className='w-1/5' src={Likes} alt="" />
                        <p className='text-3xl font-extrabold text-white'>{count}</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='
        flex items-center justify-center py-8
        '>
            <div className='flex flex-col gap-10 p-4'>
                {render(philippine, 'philippine', count)}
                {render(china, "china", chinaCount)}
            </div>
        </div>
    );
}

export default Container;