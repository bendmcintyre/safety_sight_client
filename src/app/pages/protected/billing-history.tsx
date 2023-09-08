import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../features/common';
import { BillingHistory } from '../../../features/settings/billing-history';

function BillingHistoryPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : 'Bills'}))
      }, [])


    return(
        <BillingHistory />
    )
}

export {
  BillingHistoryPage,
}

export default BillingHistoryPage;
