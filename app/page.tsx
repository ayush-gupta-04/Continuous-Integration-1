import prisma from "../utils/db"

export default function Home() {
  prisma.user.findFirst({
    where : {
      id : "1"
    }
  })
    return(
      <div className="bg-red-400 h-full flex justify-center items-center">
        <div className="text-black">My running app</div>
      </div>
    )
}
