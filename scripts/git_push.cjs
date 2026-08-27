const { execSync, spawn } = require('child_process');

async function main() {
  try {
    const token = execSync('gh auth token', { encoding: 'utf8' }).trim();
    const authedUrl = `https://${token}@github.com/vmcifuentesb/pagina-web-mommentum.git`;
    
    execSync(`git remote set-url origin ${authedUrl}`);
    console.log('Set origin with token. Pushing...');

    const push = spawn('git', ['push', 'origin', 'main'], { stdio: 'inherit' });
    
    push.on('close', (code) => {
      execSync('git remote set-url origin https://github.com/vmcifuentesb/pagina-web-mommentum.git');
      console.log(`Git push exited with code ${code}`);
      process.exit(code);
    });
  } catch (err) {
    execSync('git remote set-url origin https://github.com/vmcifuentesb/pagina-web-mommentum.git');
    console.error('Error:', err);
    process.exit(1);
  }
}

main();
