import { createContext, useState } from "react"

interface CameraInterface {
    position: {
        x: number,
        y: number,
        z: number
    },
    rotation: {
        x: number,
        y: number,
        z: number
    }
}

interface ThreeContextInterface {
    camera: CameraInterface
}

const initialContext: ThreeContextInterface = {
    camera: {
        position: {
            x: 0,
            y: 1.2,
            z: 6
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0
        } 
    }
}

export const ThreeContext: React.Context<any> = createContext(initialContext);

const ThreeContextProvider = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    const [three, setThree] = useState<ThreeContextInterface>(initialContext);

    return <ThreeContext.Provider value={{three, setThree}}>
        {children}
    </ThreeContext.Provider>
}

export default ThreeContextProvider;