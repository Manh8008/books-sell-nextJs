import classNames from 'classnames/bind'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input } from '@/components/ui/input'

import styles from './search.module.scss'
import { Button } from '../button'

const cx = classNames.bind(styles)

export const SearchBar = () => {
    return (
        <div className={cx('wrapper')}>
            <Input type="text" placeholder="Tìm kiếm..." className={cx('search-input')} />

            <Button
                primary
                small
                className={cx('button')}
                leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faSearch} />}
            ></Button>
        </div>
    )
}
