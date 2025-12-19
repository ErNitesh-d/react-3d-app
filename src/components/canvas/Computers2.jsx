  const [isMobile,setIsMobile] =useState(false);

  useEffect(()=>  {
      const mediaQuery = window.matchMedia('max-width:500');

        setIsMobile(mediaQuery.matches);
        
        const handleMediaQueryChange=(event)=>{
          setIsMobile(event.matches)
        }
        mediaQuery.addEventListener('change',handleMediaQueryChange);
        
        return() => {
          mediaQuery.removeEventListener('change',handleMediaQueryChange);
        }
  }, [])