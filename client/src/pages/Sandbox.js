{/* <script type="text/javascript">
var lastScrollTop =0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
  let scrollTop = window.pageYOffset || document
  .documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top="-100px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;
})
</script> */}

{/* <script>
var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

</script> */}

const [lastScrollTop, setLastScrollTop] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const navbar = document.getElementById('nav');
    if (scrollTop > lastScrollTop) {
      navbar.style.top = '-100px';
    } else {
      navbar.style.top = '0';
    }
    setLastScrollTop(scrollTop);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [lastScrollTop]);