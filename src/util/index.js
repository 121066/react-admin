export function downLoad(fileName, data) {
    console.log(fileName, data);
    const filename = fileName;
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const href = window.URL.createObjectURL(blob);
    // 兼容 ie
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = href;
    link.download = decodeURIComponent(filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(link);
}
