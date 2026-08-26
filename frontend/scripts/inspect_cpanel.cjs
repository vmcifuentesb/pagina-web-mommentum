const ftp = require('basic-ftp');

async function inspectPaths() {
  const client = new ftp.Client();
  try {
    await client.access({
      host: "66.225.221.182",
      user: "lhqczrfu",
      password: "4Yr4r773rWhlnD",
      secure: false
    });
    
    console.log("Checking public_html directory...");
    try {
      await client.cd("public_html");
      const listPub = await client.list();
      console.log("Inside public_html:", listPub.map(f => `${f.name} (${f.isDirectory ? 'DIR' : 'FILE'})`));
    } catch (e) {
      console.log("Could not cd to public_html:", e.message);
    }

    console.log("Checking altabrisa.promptendweb.com...");
    try {
      await client.cd("/altabrisa.promptendweb.com");
      const listAlt = await client.list();
      console.log("Inside altabrisa:", listAlt.map(f => f.name));
    } catch(e) {
      console.log("Could not cd to altabrisa:", e.message);
    }
  } catch (err) {
    console.error("Error:", err);
  }
  client.close();
}

inspectPaths();
