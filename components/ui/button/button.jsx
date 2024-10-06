import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './button.module.scss'
import Link from 'next/link'
const cx = classNames.bind(styles)

export const Button = ({
    href,
    primary = false,
    fullWidth = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    children,
    onClick,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) => {
    let Comp = 'button'

    const props = {
        onClick,
        ...passProps
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (href) {
        Comp = Link
        props.href = href
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        fullWidth,
        outline,
        small,
        large,
        text,
        disabled,
        rounded
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    fullWidth: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func
}
