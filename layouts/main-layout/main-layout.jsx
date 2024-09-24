import { Header } from '@/components/shared/header'
import { Footer } from '@/components/shared/footer'

export const MainLayout = ({ children }) => {
    return (
        <div className="main">
            <Header />
            {children}
            <Footer />
        </div>
    )
}
