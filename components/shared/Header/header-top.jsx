import classNames from 'classnames/bind'
import styles from './header.module.scss'
import { Button } from '@/components/ui/button'
const cx = classNames.bind(styles)

export const HeaderTop = () => {
    return (
        <div className={cx('header-top')}>
            <div className={cx('content-right')}>
                <p>EduBook - Cội nguồn của tri thức</p>
                <div>
                    <Button className={cx('button')} text>
                        Hỏi đáp
                    </Button>
                    <Button className={cx('button')} text>
                        Hướng dẫn
                    </Button>
                    <Button href="/auth/register" className={cx('button')} text>
                        Đăng kí
                    </Button>
                    <Button href="/auth/login" className={cx('button')} text>
                        Đăng nhập
                    </Button>
                </div>
            </div>
        </div>
    )
}
