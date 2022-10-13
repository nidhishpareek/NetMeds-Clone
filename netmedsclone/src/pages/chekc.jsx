import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import './Check.modules.css'
// import styles from './Carousel.module.css';
import Carousel from 'react-elastic-carousel'
// import Item from 'react-elastic-carousel'

export const Check = () => {
    const ref = useRef();
    const [count, setCount] = useState(0);
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const images = [
        {id: 1}, {id: 2}, {id: 3}, {id: 4}
    ]
const handleClick = (val) => {
    let newCount = count;
		if (val === 'forward') {
			newCount++;
			setCount(newCount);
		} else if (val === 'backward') {
			newCount--;
			setCount(newCount);
		}

		if (newCount === images.length) {
			setCount(0);
			ref.current.style.transform = 'translate(0)';
			return;
		}
		if (newCount === -1) {
			setCount(images.length-1);
			ref.current.style.transform = `translate(-${
				(images.length - 1) * (100 / images.length)
			}%)`;
			return;
		}

		ref.current.style.transform = `translate(-${
			newCount * (100 / images.length)
		}%)`;
}
return  <div className='container'>
            <div className='box'>
                <div>
                    <div ref={ref} className='imageContainer'>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSsLWVn6ZOrtsgl4lhc4C9DnRGk8ituA04w&usqp=CAU" alt="" /></div>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuP4A26vUkEZwYJL4zGV8KRxUbBmcX11Mdw&usqp=CAU" alt="" /></div>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfqeMkys2WCrZxqFQ3A12jdnxImtUNgxdjuQ&usqp=CAU" alt="" /></div>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdX029ohIUSygq9zirl9fSNBwSLqEOaKEYuw&usqp=CAU" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className='yes'>
                                <button
                                    // className={styles.leftBtn}
                                    onClick={() => handleClick('backward')}
                                >
                                    <i class='fas fa-chevron-circle-left'></i>
                                </button>
                                <button
                                    // className={styles.rightBtn}
                                    onClick={() => handleClick('forward')}
                                >
                                    <i class='fas fa-chevron-circle-right'></i>
                                </button>
                    </div>
        </div>
}

