import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common';
import FaceFrownIcon  from '@heroicons/react/24/solid/FaceFrownIcon'

const Page404 = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: '' }))
  }, [])

  return (
    <div className="hero h-4/5 bg-base-200">
            <div className="hero-content text-accent text-center">
                <div className="max-w-md">
                <FaceFrownIcon className="h-48 w-48 inline-block"/>
                <h1 className="text-5xl  font-bold">404 - Not Found</h1>
                </div>
            </div>
        </div>
    );
}

export {
  Page404,
}

export default Page404;
