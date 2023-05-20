export const croppedImg = (url, size) => {
    const sliceUrl = url.indexOf("limit_1");

    return `${url.slice(0, sliceUrl)}h_${size},${url.slice(sliceUrl)}`;
};
