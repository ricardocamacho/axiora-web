import Topnav from '@/containers/Topnav'
import Footer from '@/containers/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Topnav />
            { children }
            <Footer />
        </>
    )
}
