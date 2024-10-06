import classNames from 'classnames/bind'
import styles from './product-card.module.scss' // Assuming you are using SCSS for styling

const cx = classNames.bind(styles)

export const ProductCard = () => {
    return (
        <div className={cx('product-card')}>
            <a href="#!" className={cx('product-link')}>
                <img
                    src="/images/product-1.png"
                    alt="Thanh Gươm Diệt Quỷ - Tập 12"
                    className={cx('product-image')}
                />
            </a>
            <div className={cx('product-info')}>
                <h3 className={cx('product-title')}>
                    <a href="#!">Thanh Gươm Diệt Quỷ - Tập 12: Các Thượng...</a>
                </h3>
                <div className={cx('rating-stars')}>
                    <img src="/images/star.svg" alt="Star" />
                    <img src="/images/star.svg" alt="Star" />
                    <img src="/images/star.svg" alt="Star" />
                    <img src="/images/star.svg" alt="Star" />
                    <img src="/images/star.svg" alt="Star" />
                </div>
                <div className={cx('price')}>25.000đ</div>
            </div>
        </div>
    )
}
