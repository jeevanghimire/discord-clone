import { ModeToggle } from '@/components/toogleButton'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'


export default function Home() {
    return(
    <>
        <UserButton afterSignOutUrl=" /"/>
        <p className='text-3xl font-bold'>hello world</p>
        
        <ModeToggle />
    </>

    )
}

