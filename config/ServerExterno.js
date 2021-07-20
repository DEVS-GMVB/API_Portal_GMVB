const Client = require('ssh2-sftp-client');

const envio  = async() =>{
    let sftp = new Client;
    const config = {
       host: {
         host: 'ftp.grupogmvb.com',
         username: 'bsouza',
         password: 'bruno0422LA',
       },
    //    folder: folder          // pasta no servidor a ser baixada
       local: '../tmp/uploads' ,          // pasta no projeto
       bkp: '/wwwroot/lw/'               // pasta de backup
    }
    await sftp.connect(config.host);
    // await sftp.downloadDir(config.folder, config.local);
    await sftp.uploadDir(config.local, config.bkp);
    await sftp.end();

}
  module.exports = envio;  