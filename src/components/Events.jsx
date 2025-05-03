import React, {useState, useEffect} from 'react';

function Events() {
  const [footerHeight, setFooterHeight] = useState(0);
  const [pluginHeight, setPluginHeight] = useState(0);

  useEffect(() => {
    // Get footer height
    const footer = document.getElementById('footer');
    if (footer) {
      setFooterHeight(footer.offsetHeight);
    }
    // Calculate plugin height
    setPluginHeight(window.innerHeight - footerHeight);
    // Handle window resize
    const handleResize = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        setFooterHeight(footer.offsetHeight);
      }
      setPluginHeight(window.innerHeight - footerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='fb-plugin-container'>
      <iframe
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvwcollectivemke%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=3648775595415677'
        width='500'
        height='1000'
        scrolling='no'
        frameborder='0'
        allowfullscreen='true'
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
      ></iframe>
    </div>
  );
}

export default Events;
