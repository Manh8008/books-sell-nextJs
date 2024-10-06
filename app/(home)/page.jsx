import { ProductCard } from '@/components/product-card'
import { Banner } from '@/components/shared/banner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <div className="container">
            <Banner />
            <ProductCard />
        </div>
    )
}
