import hre from "hardhat"
import ethers from "hardhat"
import { HardhatRuntimeEnvironment } from "hardhat/types"

async function main() {
    const Xyz = await ethers.getContract("Stake")
    const xyz = await Xyz.deploy()
    await xyz.deployed()
    console.log("Xyz deployed to:", xyz.address)
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
