import { ConnectButton } from "web3uikit"
import Link from "next/link"

const Header = () => {
    return (
        <nav>
            <h1 className="py-4 px-4 font-bold text-3xl">NFT</h1>
            <div>
                <Link href="/">Home</Link>
                <Link href="/sell-nft">Sell NFT</Link>
                <ConnectButton />
            </div>
        </nav>
    )
}

export default Header
