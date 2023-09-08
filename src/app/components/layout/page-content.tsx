import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from '../header';
import { MainRoutes } from '../../routes';
import { SuspenseContent } from '.';

const Page404 = lazy(() => import('../../pages/404'));

function PageContent(){
  //const mainContentRef = useRef(null);
  const mainContentRef = useRef<HTMLHeadingElement>(null!);
  const { pageTitle } = useSelector((state:any) => state.header);


  // Scroll back to top on new page load
  useEffect(() => {
    mainContentRef.current.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }, [pageTitle]);

  return(
    <div className="drawer-content flex flex-col ">
      <Header/>
      <main className="flex-1 overflow-y-auto pt-8 px-6 bg-base-200" ref={mainContentRef}>
        <Suspense fallback={<SuspenseContent />}>
          <Outlet />
{/* 
          <Routes>
            {
              MainRoutes.map((route:any, key:any) => {
                return(
                  <Route
                    key={key}
                    path={`${route.path}`}
                    element={<route.component />}
                  />
                )
              })
            }

            <Route path="*" element={<Page404 />} />
          </Routes>
            Redirecting unknown url to 404 page */}
        </Suspense>
        {/* drop shadow :) */}
        <div className="h-16"></div>
      </main>
    </div> 
  )
}

export {
  PageContent,
}

export default PageContent;
