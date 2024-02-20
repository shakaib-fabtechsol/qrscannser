const textEl = document.querySelector('#data');
const sizeEl = document.querySelector('#size');
const logoEl = document.querySelector('#logo');
const clearEl = document.querySelector('#clear');
const marginEl = document.querySelector('#margin');
const dotModEl = document.querySelector('#dot');
const dotcolorEl1 = document.querySelector('#dot-color-1');
const bgEl = document.querySelector('#bg-color');
const dlEl = document.querySelector('#btn-dl');
const csEl = document.querySelector('#corner-square');
const cscEl = document.querySelector('#corner-square-color');
const cdEl = document.querySelector('#corner-dot');
const cdcEl = document.querySelector('#cornerdot-color');

let op = {
    width: 300,
    height: 300,
    type: "svg",
    data: textEl.value,
    dotsOptions: {
        color: "#000",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#fff",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    },
    cornersSquareOptions: {
        type: "square",
        color: "#000" 
    },
    cornersDotOptions: {
        type: "square",
        color: "#000"
    }
};

render();

sizeEl.addEventListener('input', e => {
    op.width = e.target.value * 5;
    op.height = e.target.value * 5;
    render();
});

textEl.addEventListener('keyup', e => {
    op.data = e.target.value;
    render();
});

marginEl.addEventListener('input', e => {
    op.imageOptions = { margin: e.target.value };
    render();
});

dotModEl.addEventListener('change', e => {
    op.dotsOptions.type = e.target.value;
    render();
});

dotcolorEl1.addEventListener('input', e => {
    op.dotsOptions.color = e.target.value;
    render();
});

bgEl.addEventListener('input', e => {
    op.backgroundOptions.color = e.target.value;
    render();
});

csEl.addEventListener('change', e => {
    op.cornersSquareOptions.type = e.target.value;
    render();
});
cdEl.addEventListener('change', e => {
    op.cornersDotOptions.type = e.target.value;
    render();
});
cscEl.addEventListener('input', e => {
    op.cornersSquareOptions.color = e.target.value;
    render();
});
cdcEl.addEventListener('input', e => {
    op.cornersDotOptions.color = e.target.value;
    render();
});

function render() {
    qrCode = new QRCodeStyling(op);
    let canvasEl = document.querySelector('.canvas');
    canvasEl.innerHTML = '';
    qrCode.append(canvasEl);
    canvasEl.nextElementSibling.innerHTML = `${op.width}px  ${op.height}px`;
}

function browse() {
    logoEl.click();
}

logoEl.addEventListener('change', e => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
        op.image = reader.result;
        render();
    };
    reader.readAsDataURL(file);
}
);
clearEl.addEventListener('click', e => {
    delete op.image;
    render();
});

dlEl.addEventListener('click', e => {
    qrCode.download(
        { name: 'qr', extension: 'svg' },
        () => {
            render();
        }
    );
});
