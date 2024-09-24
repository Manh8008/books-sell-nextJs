import Image from 'next/image'
import { images } from '@/public/images'

export const TopBanner = () => {
    return (
        <div className="d-flex justify-content-center">
            <Image
                className="top-banner-img"
                src={images.topBanner}
                width={1707}
                height={66}
                quanliti={100}
                alt="top banner"
            />
        </div>
    )
}
