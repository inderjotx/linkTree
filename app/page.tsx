import Image from "next/image";
import bgImage from "@/public/background.webp"
import { ArrowRight, BadgeCheck, GithubIcon, Linkedin, Mail, Palette, PictureInPicture } from "lucide-react";
import Link from "next/link";
import Badge from "@/components/Badge";

import Twitter from "@/public/twitter.png"
import Instagram from "@/public/instagram.png"
import Telegram from "@/public/telegram.png"
import Discord from "@/public/discord.png"
import IconLinks from "@/components/IconLinks";
import { useRouter } from "next/navigation";

const tags = [
  {
    "icon": "🖥",
    "text": " Developer",
  },
  {
    "icon": "🔨",
    "text": "Architect",
  }
  ,
  {
    "icon": "∞",
    "text": "Devops",
  },
  {
    "icon": "🦊",
    "text": "Anime",
  },
  {
    "icon": "🎵",
    "text": "Music",
  },
]

const links = [
  { url: "https://twitter.com/__Inderjot", image: Twitter },
  { url: "https://www.instagram.com/inderjot1112", image: Instagram },
  { url: "https://telegram.me/inderjotx", image: Telegram },
  { url: "https://discordapp.com/users/1061624989473845308", image: Discord },
]



export default function Home() {



  return (
    <div className="flex h-screen w-full flex-col text-white  items-center">
      <div className="w-full h-1/4  md:h-1/3  relative"  >
        <Image src={bgImage} fill sizes="100vh" unoptimized alt="bg-image" className="absolute object-cover" ></Image>
      </div>


      <div className="flex  max-w-7xl px-2 md:px-0 mx-auto h-2/3  flex-col items-center">


        <div className="h-32 w-32 relative flex items-center justify-center text-black overflow-hidden border-4 border-black  bg-white z-10 mt-[-50px] rounded-full">
          <Image src={'alpha.svg'} fill sizes="100" unoptimized alt="bg-image" className="absolute object-cover p-5 rounded-full" ></Image>
        </div>
        <div className="flex mt-1 items-center gap-1  ">
          <h2 className="text-gray-300 text-2xl pl-5 inline-block ">Inderjot Singh</h2><span><BadgeCheck fill="#7F00FF" color="black" ></BadgeCheck> </span>
        </div>

        <div>
          <Link className="text-gray-500 text-sm" href={'/'}>hi.inderjot.me 👋🏻 </Link>
        </div>


        <div className="mt-1 text-gray-400">
          Next JS, AWS and Typescript
        </div>


        <div className="flex  justify-center items-center  flex-wrap  gap-2 mt-6  ">
          {
            tags.map((tag) => (
              <Badge {...tag} key={tag.icon} ></Badge>
            ))
          }
        </div>


        <div className="flex gap-4 mt-4">

          <Link target="_blank" href={"https://www.linkedin.com/in/inderjot-singh-4a5404226"}>
            <Linkedin fill="white" color="white" className="bg-blue-400 hover:scale-105 transition-all h-8 w-8 p-1 rounded-md"  ></Linkedin>
          </Link>
          {
            links.map(({ url, image }) => (
              <IconLinks url={url} key={url} image={image} />
            ))
          }
          <Link target="_blank" href={"https://github.com/inderjotx"}>
            <GithubIcon color="white" className="w-8 h-8 hover:scale-105 transition-all"></GithubIcon>
          </Link>

          <Link target="_blank" href={"mailto:inderjotsingh141@gmail.com"} >
            <Mail color="white" className="h-8 w-8 hover:scale-105 transition-all " ></Mail>
          </Link>

        </div>

        <Link href={"https://inderjot.me"} target="_blank" className="h-16 mt-10
        mx-auto group w-full flex  rounded-sm bg-zinc-900" >
          <div className="w-1/5 flex items-center justify-center border-r border-zinc-800 h-full" >
            <Palette className="w-8 h-8 group-hover:text-gray-400 transition-all" />
          </div>
          <div className="flex w-full px-4 items-center  justify-between "  >
            <div className="group-hover:text-gray-400" >My Portfolio</div>
            <ArrowRight className="group-hover:translate-x-0.5 group-hover:text-gray-400 transition-all" />
          </div>
        </Link>

      </div>
    </div>
  )
}
