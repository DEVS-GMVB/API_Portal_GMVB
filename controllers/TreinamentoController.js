const path = require('path');
const fs = require('fs');
const mime = require('mime');

const TreinamentosController = {
    DownloadFile: async (req, res) => {
        const hashFile = req.params.hash;
        const dirFile = req.params.dir;

        console.log(hashFile, dirFile);
        //"tmp/uploads/" + hashFile;
        const file = path.join("tmp", "ArquivosTreinamentos", dirFile, hashFile);

        const filename = path.basename(file);
        const mimetype = await mime.lookup(file);

        res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        res.setHeader('Content-type', mimetype);

        var filestream = await fs.createReadStream(file);
        filestream.pipe(res);

        return res.download(filestream);
    }
}

module.exports = TreinamentosController;