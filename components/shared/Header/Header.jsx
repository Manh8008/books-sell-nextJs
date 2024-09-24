import { SupportBar } from './support-bar'
import { TopBanner } from './top-banner'
import classNames from 'classnames/bind'
import styles from './header.module.scss'
const cx = classNames.bind(styles)

const Header = () => {
    return (
        <div className="header">
            <TopBanner />
            <div className={cx('support-bar')}>
                <SupportBar />
            </div>
        </div>
    )
}

export default Header
