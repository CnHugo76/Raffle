const { network, ethers } = require("hardhat")
const { debelopmentChains, developmentChains } = require("../helper-hardhat-config")

const BASE_FRR = ethers.utils.parseEther("0.25")
const GAS_PRICE_LINK = 1e9

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const agrs = [BASE_FRR, GAS_PRICE_LINK]
    if (developmentChains.includes(network.name)) {
        log("Local netword detected! Deploying mocks...")

        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: agrs,
        })
        log("Mocks Deployed!")
        log("___________________________________________")
    }
}

module.exports.tags = ["all", "mocks"]
