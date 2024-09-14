import classNames from 'classnames/bind'
import { Header, Footer } from '@/components/shared'
import styles from './MainLayout.module.scss'
const cx = classNames.bind(styles)

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
