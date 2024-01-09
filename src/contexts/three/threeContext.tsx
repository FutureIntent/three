import { createContext, useState } from "react"

interface ThreeContextInterface {
    dummy: any
}

const initialContext: ThreeContextInterface = {
    dummy: null
}

export const ThreeContext: React.Context<any> = createContext(initialContext);

const ThreeContextProvider = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    const [three, setThree] = useState<ThreeContextInterface>(initialContext);

    return <ThreeContext.Provider value={[three, setThree]}>
        {children}
    </ThreeContext.Provider>
}

export default ThreeContextProvider;