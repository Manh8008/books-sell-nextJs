import classNames from 'classnames/bind'
import Image from 'next/image'
import styles from './banner.module.scss'

const cx = classNames.bind(styles)

export const Banner = () => {
    return (
        <div className={cx('wrap-banner')}>
            <div className={cx('content')}>
                <div className={cx('banner')}>
                    <div className={cx('banner-left')}>
                        <Image
                            src="/images/banner-1.svg"
                            alt="Banner Left"
                            width={600}
                            height={400}
                            layout="responsive"
                        />
                    </div>
                    <div className={cx('banner-right')}>
                        <div className={cx('right-top')}>
                            <Image
                                src="/images/banner-2.svg"
                                alt="Right Top"
                                width={300}
                                height={200}
                                layout="responsive"
                            />
                        </div>
                        <div className={cx('right-bottom')}>
                            <Image
                                src="/images/banner-3.svg"
                                alt="Right Bottom"
                                width={300}
                                height={200}
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
