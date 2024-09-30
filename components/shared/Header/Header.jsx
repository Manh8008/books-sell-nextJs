import { SupportBar } from './support-bar'
import { HeaderTop } from './header-top'
import classNames from 'classnames/bind'
import styles from './header.module.scss'
const cx = classNames.bind(styles)

const Header = () => {
    return (
        <div className={cx('header')}>
            <HeaderTop />
            <div className={cx('header-content')}></div>
        </div>
    )
}

export default Header
