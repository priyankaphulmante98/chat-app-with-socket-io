import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function ChatPage() {

    const [chats, setChats] = useState([])

async function fetchChats(){
const data = await axios.get('/api/chats')
console.log(data)
setChats(data)
    }

    useEffect(() => {
        fetchChats()
    }, [])

    
    return (
        <div>
          {
            chats.map((e) => {
                return <div key={e.id}>
                    {e.chats}
                    </div>
            })
          }
          
        </div>
      )
    }

export default ChatPage

