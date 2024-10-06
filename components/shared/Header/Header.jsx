import classNames from 'classnames/bind'
import { faBars, faCartShopping, faPhoneVolume, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactItem } from '@/components/ui/contact-item'
import { SearchBar } from '@/components/ui/search-bar'
import styles from './header.module.scss'
import Image from 'next/image'

const cx = classNames.bind(styles)

export const Header = () => {
    return (
        <header className={cx('header')}>
            <div className={cx('top-header')}>
                <Image width={1500} height={200} src="/images/banner-sale.jpg" alt="banner top" />
            </div>
            <div className={cx('mid-header')}>
                <nav className={cx('navbar')}>
                    <div className={cx('row')}>
                        <Image
                            width={200}
                            height={80}
                            src="/images/logo.svg"
                            className={cx('logo-img')}
                            alt="Book Shop"
                        />

                        <SearchBar />

                        <div className={cx('list')}>
                            <ContactItem
                                href=""
                                icon={faPhoneVolume}
                                textLines={['Gọi điện đặt hàng', '0986 836 563']}
                            />
                            <ContactItem
                                href="/auth/login"
                                icon={faUser}
                                textLines={['Đăng nhập']}
                            />
                            <ContactItem
                                href="#!"
                                icon={faCartShopping}
                                textLines={['Giỏ hàng']}
                                badge="0"
                            />
                        </div>
                    </div>
                </nav>
            </div>
            <div className={cx('bot-header')}>
                <div className={cx('content')}>
                    <nav className={cx('navbar')}>
                        <div className={cx('cate')}>
                            <FontAwesomeIcon className={cx('cat-icon')} icon={faBars} />

                            <span>TẤT CẢ DANH MỤC</span>
                        </div>

                        <ul>
                            <li>
                                <a href="#!">Trang chủ</a>
                            </li>
                            <li>
                                <a href="#!">Sản phẩm</a>
                            </li>
                            <li>
                                <a href="#!">Bài viết</a>
                            </li>
                            <li>
                                <a href="#!">Tuyển cộng tác viên</a>
                            </li>
                            <li>
                                <a href="#!">Liên hệ</a>
                            </li>
                            <li>
                                <a href="#!">Review Sách</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
