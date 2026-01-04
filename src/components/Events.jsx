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
    <div className='fb-plugin-container app-page-container'>
      <iframe
        src='https://widgets.sociablekit.com/facebook-group-events/iframe/25639076'
        frameborder='0'
        width='100%'
        height='1000'
      ></iframe>
    </div>
  );
}

export default Events;
