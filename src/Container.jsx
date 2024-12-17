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
        let ch = Math.floor(Math.random() * 15); // Random increment
        let intervalSpeed = Math.floor(Math.random() * (3000 - 500) + 500); // Random speed between 500ms and 3000ms
    
        const updateChinaCount = () => {
            setCount(prev => prev + ch);
            intervalSpeed = Math.floor(Math.random() * (3000 - 500) + 500); // Update speed unpredictably
            clearInterval(interval);
            interval = setInterval(updateChinaCount, intervalSpeed); // Restart with new speed
        };
    
        let interval = setInterval(updateChinaCount, intervalSpeed);
    
        return () => {
            clearInterval(interval);
        };
    }, []);

    React.useEffect(() => {
        let ch = Math.floor(Math.random() * 15); // Random increment
        let intervalSpeed = Math.floor(Math.random() * (3000 - 500) + 500); // Random speed between 500ms and 3000ms
    
        const updateChinaCount = () => {
            setChina(prev => prev + ch);
            intervalSpeed = Math.floor(Math.random() * (3000 - 500) + 500); // Update speed unpredictably
            clearInterval(interval);
            interval = setInterval(updateChinaCount, intervalSpeed); // Restart with new speed
        };
    
        let interval = setInterval(updateChinaCount, intervalSpeed);
    
        return () => {
            clearInterval(interval);
        };
    }, []);

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