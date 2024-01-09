import { useEffect, useState } from "react";

export interface SizeInterface {
    width: number,
    height: number
}

const useResize = () => {

    const [size, setSize] = useState<SizeInterface>({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => setSize({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.document.removeEventListener('resize', handleResize);
    }, []);

    return size;
}

export default useResize;