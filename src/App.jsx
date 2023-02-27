import avatar from './assets/avatar.png'
import { CircleLoader } from 'react-spinners'
import { supabase } from './supabaseClient'
import { useEffect, useState } from 'react'
import Icon from './icon'
import Footer from './Footer'


export default function App() {

    const [loading, setLoading ] = useState(false)
    const [links, setLinks ] = useState([])

    useEffect(() => {
        async function getLinks(){
            setLoading(true)
            try {
                const linksData = await supabase.from('links').select()
                setLinks(linksData.data)
                console.log(linksData.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
            
        }
    
        getLinks()
    }, [])

  return (
    <div className='w-screen h-screen flex flex-col'>
        <div className='App flex flex-col items-center justify-center w-full h-[95vh]'>
                <p className=' text-[#e9ecff] mb-5 p-4'>Hi, I'm Mateo, welcome to my own Linktree Project</p>
                <img src={avatar} className='w-36 h-36 mb-10' />
                {
                    loading ? 
                        <CircleLoader color="#36d7b7" />
                        :
                    <ul className='flex flex-col w-full items-center'>
                        {
                            links && links.map((link, index) => (
                                <li key={index} className='cursor-pointer m-2 py-3 px-10 w-2/4 border-cyan-700 text-white border-2 text-sm md:text-base hover:bg-cyan-400 transition-all duration-500'>
                                    <a href={link.url} target='_blank' rel='noreferrer' className='flex justify-center text-center' title={link.title}> 
                                        <Icon iconName={link.icon} /> <p className='ml-3 '>{link.title}</p>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                }
        
        </div>
        <Footer />
    </div>
        
  )
}