import Logo from '../images/icons/aidan-tang-icon-bg.jpg'
import TableOfContentsIcon from '../images/icons/table-of-contents-icon-dark.png'
import Image from 'next/image'

export default function Header(){
    return(
        <>
            <div className="px-6 w-screen border-b-2 dark:border-gray-800 border-solid h-[5rem] dark:bg-[hsl(0,0,5%)] bg-white border-gray-400 flex justify-center items-center">
                <div className="w-1/3 h-full "/>

                <div className="w-1/3 h-full flex items-center justify-center">
                    <Image src={Logo} alt="Aidan Tang Logo" className="w-14"/>
                </div>

                <div className="w-1/3 h-full flex items-center justify-end">
                    <button className=" flex items-center justify-center transition-all hover:border-2 w-11 h-10">
                        <Image src={TableOfContentsIcon} alt="Menu" className="w-8 brightness-0 dark:brightness-100"/>
                    </button>
                </div>
                
                
                
            </div>
        </>
    )
}

/*

                <div className="flex-grow"/>
                
*/