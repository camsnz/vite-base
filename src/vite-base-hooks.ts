import fs from "fs"

import basePkgJson from "../package.json"
import baseTsconfigJson from "../tsconfig.json"
import baseTsconfigWebJson from "../tsconfig.web.json"

const pkgFile = fs.readFileSync("./package.json", "utf-8")
const tsconfigJson = fs.readFileSync("./tsconfig.json", "utf-8")
const tsconfigWebJson = fs.readFileSync("./tsconfig.web.json", "utf-8")

const pkgJson = JSON.parse(pkgFile)
console.log("Running hooks!")
console.log(pkgJson.name)
console.log(basePkgJson.name)
console.log("hooks done!")
