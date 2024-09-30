import classNames from 'classnames/bind'
import styles from './header.module.scss'
const cx = classNames.bind(styles)

export const HeaderTop = () => {
    return (
        <div className={cx('header-top')}>
            <div className={cx('content-right')}>
                <p>EduBook - Cội nguồn của tri thức</p>
                <div>
                    <span>Hỏi đáp</span>
                    <span>Hướng dẫn</span>
                    <span>Đăng kí</span>
                    <span>Đăng nhập</span>
                </div>
            </div>
        </div>
    )
}
