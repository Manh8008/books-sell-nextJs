import classNames from 'classnames/bind'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.scss'
import images from '@/public/images'
const cx = classNames.bind(styles)

const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('item')}>
                    <h4 className={cx('title')}>Về chúng tôi</h4>
                    <ul>
                        <li>
                            Edubook là cửa hàng luôn cung cấp cho các bạn tìm tòi tri thức, đam mê đọc sách trên khắp cả
                            nước.Chúng tôi sẽ liên tục cập nhật những cuốn sách hay nhất, mới nhất, chất lượng nhất giúp
                            người đọc có những cuốn sách hay nhất để đọc!
                        </li>

                        <li>Điện thoại: 0352 860 701</li>
                        <li>Email: teamed2@gmail.com</li>
                        <li>Zalo: 039.882.3232</li>
                    </ul>
                </div>

                <div className={cx('item')}>
                    <h4 className={cx('title')}>Chính sách mua hàng</h4>
                    <ul>
                        <li>
                            <Link href="#">Hình thức đặt hàng</Link>
                        </li>
                        <li>
                            <Link href="#">Hình thức thanh toán</Link>
                        </li>
                        <li>
                            <Link href="#">phương thức vận chuyển</Link>
                        </li>
                        <li>
                            <Link href="#">Chính sách đổi trả</Link>
                        </li>

                        <li>
                            <Link href="#">Hướng dẫn sử dụng</Link>
                        </li>
                    </ul>
                </div>

                <div className={cx('item')}>
                    <h4 className={cx('title')}>Hotline liên hệ</h4>
                    <ul>
                        <li className={cx('contact')}>
                            <Image className={cx('contact-image')} src={images.phone} alt="ảnh điện thoại" />
                            <div className={cx('contact-information')}>
                                <span className={cx('contact-phone')}>0865587127</span>
                                <span>(giải đáp thắc mắc 24/24)</span>
                            </div>
                        </li>

                        <li>Điện thoại: 0352 860 701</li>
                        <li>Email: teamed2@gmail.com</li>
                        <li>Zalo: 039.882.3232</li>
                    </ul>
                </div>
            </div>

            <div className={cx('bottom')}>
                <p>@Bản quyền thuộc về edubook | Thiết kế bởi four team</p>
            </div>
        </div>
    )
}

export default Footer
