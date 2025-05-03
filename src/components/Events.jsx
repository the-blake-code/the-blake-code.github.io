import React, {useState, useEffect, useRef} from 'react';

function Events() {
  const [iframeHeight, setIframeHeight] = useState('0px');
  const [footerHeight, setFooterHeight] = useState(0);
  const iframeRef = useRef(null);

  useEffect(() => {
    const footer = document.getElementById('footer');
    if (footer) {
      setFooterHeight(footer.offsetHeight);
    }

    const handleResize = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        setFooterHeight(footer.offsetHeight);
        setIframeHeight(window.innerHeight - footerHeight + 'px');
      }
      setIframeHeight(window.innerHeight - footerHeight + 'px');
    };

    setIframeHeight(window.innerHeight - footerHeight + 'px');
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onLoad = () => {
    // if (iframeRef.current && iframeRef.current.contentWindow) {
    iframeRef.current.contentWindow.postMessage({type: 'get-height'}, '*');
    // }
  };
  console.log('ifreame height ', iframeHeight);
  return (
    <div className='fb-plugin-container'>
    <span>Under Construction. Please visit our Facebook Group by clicking the link below, then click Events tab to see all of our upcoming events!</span>
    <span><a href"https://m.facebook.com/groups/vwcollectiveofmilwaukee/"></a>VW Collective of Milwaukee</span>  
      {/*  <iframe
        ref={iframeRef}
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvwcollectivemke%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=3648775595415677'
        width='500'
        frameborder='0'
        style={{height: iframeHeight, border: 'none'}}
        allowfullscreen='true'
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
        onLoad={onLoad}
      ></iframe> */}
    </div>
  );
}

export default Events;
