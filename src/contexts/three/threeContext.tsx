import { RootState } from "@react-three/fiber";
import { createContext, useState } from "react"


interface ThreeContextInterface {
    threeInstance: RootState | undefined
}

const initialContext: ThreeContextInterface = {
    threeInstance: undefined
}

export const ThreeContext: React.Context<any> = createContext(initialContext);

const ThreeContextProvider = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    const [three, setThree] = useState<ThreeContextInterface>(initialContext);

    return <ThreeContext.Provider value={{three, setThree}}>
        {children}
    </ThreeContext.Provider>
}

export default ThreeContextProvider;