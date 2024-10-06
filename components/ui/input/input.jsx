'use client'
import classNames from 'classnames/bind'
import styles from './input.module.scss'

const cx = classNames.bind(styles)

export const Input = ({
    type = 'text',
    label,
    name,
    id,
    placeholder,
    value,
    onChange,
    disabled = false,
    checked,
    ...props
}) => {
    return (
        <div className={cx('form-group')}>
            {label && (
                <label htmlFor={id} className={cx('form-label')}>
                    {label}
                </label>
            )}
            {type === 'checkbox' || type === 'radio' ? (
                <input
                    type={type}
                    id={id}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    className={cx('form-control', {
                        'form-control--checkbox': type === 'checkbox',
                        'form-control--radio': type === 'radio'
                    })}
                    {...props}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    className={cx('form-control')}
                    {...props}
                />
            )}
            <span className={cx('form-message')}></span>
        </div>
    )
}
