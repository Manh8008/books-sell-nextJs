import Link from 'next/link'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoNewspaperOutline } from 'react-icons/io5'
import { MdOutlineDiscount } from 'react-icons/md'
import classNames from 'classnames/bind'
import styles from './header.module.scss'
const cx = classNames.bind(styles)

export const SupportBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <ul className="d-flex">
                        <li className={cx('list-item')}>
                            <Link href="">
                                <AiOutlineInfoCircle />
                                <span>Trợ giúp</span>
                            </Link>
                        </li>
                        <li className={cx('list-item')}>
                            <Link href="">
                                <IoNewspaperOutline />
                                <span>Tin tức</span>
                            </Link>
                        </li>
                        <li className={cx('list-item')}>
                            <Link href="">
                                <MdOutlineDiscount />
                                <span>Khuyễn mãi</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-2">Column</div>
                <div className="col-6">Column</div>
            </div>
        </div>
    )
}
