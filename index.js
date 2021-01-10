const fs = require('fs')
const PNG = require('pngjs').PNG;
const {
    createCanvas
} = require('canvas');
const options = require('./cnfg.json')

fs.createReadStream("in.png")
    .pipe(
        new PNG({
            filterType: 4,
        })
    )
    .on("parsed", function() {
        const canvas = createCanvas(this.width, this.height)
        const ctx = canvas.getContext('2d')

        //randomly squarify image
        for (var i = 0; i < this.width * this.height * options.density; i++) {
            const x = Math.floor(Math.random() * this.width)
            const y = Math.floor(Math.random() * this.height)
            const rot = Math.random() * 2 * Math.PI
            const idx = (this.width * y + x) << 2;
            ctx.translate(x, y);
            ctx.rotate(rot);
            ctx.fillStyle = `rgba(${this.data[idx]},${this.data[idx + 1]},${this.data[idx + 2]},${this.data[idx + 3]})`
            ctx.fillRect(0, 0, options.size, options.size)
            ctx.rotate(-rot)
            ctx.translate(-x, -y);

        }

        canvas.createPNGStream().pipe(fs.createWriteStream(__dirname + `/out.png`));
    });