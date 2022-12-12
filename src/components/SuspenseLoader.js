import React, { useEffect } from "react";
import NProgress from 'nprogress';

const SuspenseLoader = () => {

    useEffect(() => {
    
        NProgress.configure({
            showSpinner: false
        });
        
        NProgress.start();

        return () => NProgress.done();

    }, []);

  return (
    <>
      <div className="suspense_loader">
        <div className="border_spinner_loader">
          <div></div>
        </div>
      </div>
    </>
  );
};

export default SuspenseLoader;
