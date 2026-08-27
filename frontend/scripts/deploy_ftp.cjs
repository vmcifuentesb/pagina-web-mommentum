const ftp = require('basic-ftp');
const path = require('path');

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    console.log("Connecting to FTP...");
    await client.access({
      host: "66.225.221.182",
      user: "lhqczrfu",
      password: "4Yr4r773rWhlnD",
      secure: false
    });

    console.log("Cleaning stale directories if any...");
    try {
      await client.removeDir('mommentum.promptendweb.com/portafolio/sesi-n-embarazada');
    } catch (e) {}

    console.log("Uploading fresh dist/ to mommentum.promptendweb.com...");
    const localDist = path.resolve(__dirname, '../dist');
    await client.uploadFromDir(localDist, 'mommentum.promptendweb.com');
    console.log("Deployment completed successfully!");
  } catch (err) {
    console.error("FTP Upload Error:", err);
  }
  client.close();
}

deploy();
