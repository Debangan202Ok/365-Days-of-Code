import { useEffect, useState } from 'react';

const useWinSize = () => {
    const [sizes, setSizes] = useState({ h: window.innerHeight, w: window.innerWidth });
    useEffect(() => {
        const handleResize = () => {
            setSizes({ h: window.innerHeight, w: window.innerWidth });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return sizes;
};

export default useWinSize;
