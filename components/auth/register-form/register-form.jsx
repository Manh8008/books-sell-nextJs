import classNames from 'classnames/bind'
import styles from './register-form.module.scss'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const cx = classNames.bind(styles)

export const RegisterForm = () => {
    return (
        <div className={cx('container')}>
            <form className={cx('form')}>
                <h2 className={cx('title')}>Đăng ký</h2>

                <Input label="Họ và tên" type="text" id="name" placeholder="Nhập họ và tên..." />
                <Input label="Email" type="Email" id="email" placeholder="Nhập email..." />
                <Input
                    label="Mật khẩu"
                    type="password"
                    id="password"
                    placeholder="Nhập mật khẩu..."
                />

                <Input
                    label="Nhập lại mật khẩu"
                    type="password"
                    id="password"
                    placeholder="Nhập lại mật khẩu..."
                />
                <Button primary fullWidth>
                    Login
                </Button>

                <Button text href="/auth/login">
                    Bạn đã có tài khoản ?
                </Button>
            </form>
        </div>
    )
}
