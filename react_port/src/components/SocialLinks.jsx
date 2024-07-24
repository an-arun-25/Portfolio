import React from 'react'
import Leetcode from '../../public/leet_small.png'
import linkedin from '../../public/Linkedin.png'
import github from '../../public/github.png'
import email from '../../public/email.png'
import insta from '../../public/instagram.png'
import phone from '../../public/phone.png'
const SocialLinks = () => {
    let links = [
        {
            id: 1, link: 'https://leetcode.com/u/ArunKumarSingh_19/',
            src:Leetcode,
            text:"Leetcode"
        },
        {
            id: 2, link: 'https://www.linkedin.com/in/arun-kumar-singh-324a812b3/',
            src:linkedin,
            text:"Linkedin"
        },
        {
            id: 3, link: 'https://github.com/an-arun-25',
            src:github,
            text:"GitHub"
        },
        {
            id: 5, link: 'mailto:arunnsingh7609@gmail.com?subject=Subject&body=Message body',
            src:email,
            text:"Mail me"

        },
        {
            id: 6, link: 'tel:9084843022',
            src:phone,
            text:"Call Me"
        }
    ];
    return (
        <div className=' flex flex-col fixed top-[38%] md:left-4 left-2 overflow-hidden z-10'>
            <ul className='rounded-md overflow-hidden'>
           {links.map((link) => (
                    <li
                        key={link.id}
                        className="flex flex-col items-center justify-end hover:bg-gray-700 hover:text-white bg-gray-400 h-8 ml-[-88px] hover:ml-[-4px] duration-300 hover:rounded-md w-32"
                    >
                        <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-md font-medium w-full  pl-2 pb-1"
                        >
                            <div className=' w-[80px]'>
                            {link.text}
                            </div>
                            <div className="w-6 h-6 ">
                                <img src={link.src} alt="" />
                            </div>
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default SocialLinks
