import { Header } from '@/components/shared/header'
import { Footer } from '@/components/shared/footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
