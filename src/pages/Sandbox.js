const [cursorX, setCursorX] = useState(0);
const [cursorY, setCursorY] = useState(0);
const [divWidth, setDivWidth] = useState(0);
const [divHeight, setDivHeight] = useState(0);

useEffect(() => {
  const divElement = document.getElementById("centeredDiv");
  if (divElement) {
    const { width, height } = divElement.getBoundingClientRect();
    setDivWidth(width);
    setDivHeight(height);
  }
}, []);

const updateCursorPosition = (e) => {
  setCursorX(e.pageX);
  setCursorY(e.pageY);
};

useEffect(() => {
  window.addEventListener("mousemove", updateCursorPosition);
  return () => {
    window.removeEventListener("mousemove", updateCursorPosition);
  };
}, []);

const getCenteredPosition = () => {
  const left = cursorX - divWidth / 2;
  const top = cursorY - divHeight / 2;
  return { left, top };
};

<div
id="centeredDiv"
className="cursor"
style={{
  position: "fixed",
  left: `${getCenteredPosition().left}px`,
  top: `${getCenteredPosition().top}px`,
}}
></div>