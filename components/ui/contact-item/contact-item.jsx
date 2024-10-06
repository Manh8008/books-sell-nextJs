import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './contact-item.module.scss'
import Link from 'next/link'

const cx = classNames.bind(styles)

export const ContactItem = ({ href, icon, textLines, badge }) => {
    return (
        <div className={cx('item')}>
            <Link href={href} className={cx('link')}>
                <FontAwesomeIcon className={cx('contact-icon')} icon={icon} />

                <div className={cx('text')}>
                    {badge && <span className={cx('bage')}>{badge}</span>}
                    {textLines.map((line, index) => (
                        <span key={index}>{line}</span>
                    ))}
                </div>
            </Link>
        </div>
    )
}
