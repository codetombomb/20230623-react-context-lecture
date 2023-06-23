import { createContext, useState } from 'react'

export const MessageContext = createContext();

function MessageProvider({children}){
    const [message, setMessage] = useState("Hello from Context!")
    const value = { message, setMessage }
    return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
}

export default MessageProvider

