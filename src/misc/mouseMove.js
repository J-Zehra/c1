
export const mouseMoveEvent = (e, posRef, setRotation) => {
    const { offsetTop: endY,  offsetLeft: endX } = posRef.current;
    let radian = Math.atan2(e.clientX - endX, e.clientY - endY);
    let rotation = radian * (180 / Math.PI) * -1 + 180;

    setRotation(rotation);
}