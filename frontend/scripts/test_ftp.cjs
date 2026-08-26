const ftp = require('basic-ftp');

async function testConnection() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    console.log("Connecting to FTP 66.225.221.182...");
    await client.access({
      host: "66.225.221.182",
      user: "lhqczrfu",
      password: "4Yr4r773rWhlnD",
      secure: false
    });
    console.log("Connected successfully!");
    const list = await client.list();
    console.log("Root directory list:", list.map(f => f.name));
  } catch (err) {
    console.error("FTP Connection Error:", err);
  }
  client.close();
}

testConnection();
