import classNames from 'classnames/bind'
import styles from './login-form.module.scss'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const cx = classNames.bind(styles)

export const LoginForm = () => {
    return (
        <div className={cx('container')}>
            <form className={cx('form')}>
                <h2 className={cx('title')}>Đăng nhập</h2>

                <Input label="Email" type="Email" id="email" placeholder="Nhập email..." />
                <Input
                    label="Mật khẩu"
                    type="password"
                    id="password"
                    placeholder="Nhập mật khẩu..."
                />

                <Button primary fullWidth>
                    Login
                </Button>

                <Button text href="/auth/register">
                    Bạn chưa có tài khoản ?
                </Button>
            </form>
        </div>
    )
}
