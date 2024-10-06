import { Header } from '@/components/shared/header'

export default function HomeLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
