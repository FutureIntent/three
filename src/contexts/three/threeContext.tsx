import { createContext, useState } from "react"

interface ThreeContextInterface {
    grid: any
}

const initialContext: ThreeContextInterface = {
    grid: null
}

export const ThreeContext: React.Context<any> = createContext(initialContext);

const ThreeContextProvider = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    const [three, setThree] = useState<ThreeContextInterface>(initialContext);

    return <ThreeContext.Provider value={[three, setThree]}>
        {children}
    </ThreeContext.Provider>
}

export default ThreeContextProvider;