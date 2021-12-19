import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x09C47C888f6E06DecDA93aD1251D07822FD2e592",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Mugiwara",
        description: "This NFT will give you access to OnePieceDAO!",
        image: readFileSync("scripts/assets/strawhat.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()