import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux'
import { TitleCard } from '../../app/components/cards';
import { showNotification } from '../common';



const BILLS = [
    {invoiceNo : '#4567', amount : '23,989', description : 'Product usage', status : 'Pending', generatedOn : dayjs().subtract(30*1, 'day').format('DD MMM YYYY'),  paidOn : '-'},

    {invoiceNo : '#4523', amount : '34,989', description : 'Product usage', status : 'Pending', generatedOn : dayjs().subtract(30*2, 'day').format('DD MMM YYYY'), paidOn : '-'},

    {invoiceNo : '#4453', amount : '39,989', description : 'Product usage', status : 'Paid', generatedOn : dayjs().subtract(30*3, 'day').format('DD MMM YYYY'), paidOn : dayjs().subtract(24*2, 'day').format('DD MMM YYYY')},

    {invoiceNo : '#4359', amount : '28,927', description : 'Product usage', status : 'Paid', generatedOn : dayjs().subtract(30*4, 'day').format('DD MMM YYYY'), paidOn : dayjs().subtract(24*3, 'day').format('DD MMM YYYY')},

    {invoiceNo : '#3359', amount : '28,927', description : 'Product usage', status : 'Paid', generatedOn : dayjs().subtract(30*5, 'day').format('DD MMM YYYY'), paidOn : dayjs().subtract(24*4, 'day').format('DD MMM YYYY')},

    {invoiceNo : '#3367', amount : '28,927', description : 'Product usage', status : 'Paid', generatedOn : dayjs().subtract(30*6, 'day').format('DD MMM YYYY'), paidOn : dayjs().subtract(24*5, 'day').format('DD MMM YYYY')},

    {invoiceNo : '#3359', amount : '28,927', description : 'Product usage', status : 'Paid', generatedOn : dayjs().subtract(30*7, 'day').format('DD MMM YYYY'), paidOn : dayjs().subtract(24*6, 'day').format('DD MMM YYYY')},

    {invoiceNo : '#2359', amount : '28,927', description : 'Product usage', status : 'Paid', generatedOn : dayjs().subtract(30*8, 'day').format('DD MMM YYYY'), paidOn : dayjs().subtract(24*7, 'day').format('DD MMM YYYY')},


]

const BillingHistory = () => {
    const [bills, setBills] = useState(BILLS)

    const getPaymentStatus = (status: string) => {
        if (status === 'Paid') {
            return <div className="badge badge-success">{status}</div>
        } else if (status === 'Pending') {
            return <div className="badge badge-primary">{status}</div>
        } else {
            return <div className="badge badge-ghost">{status}</div>
        }
    }

    return(
        <>
            
            <TitleCard title="Billing History" topMargin="mt-2">

                {/* Invoice list in table format loaded constant */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Invoice No</th>
                        <th>Invoice Generated On</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Invoice Paid On</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bills.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>{l.invoiceNo}</td>
                                    <td>{l.generatedOn}</td>
                                    <td>{l.description}</td>
                                    <td>${l.amount}</td>
                                    <td>{getPaymentStatus(l.status)}</td>
                                    <td>{l.paidOn}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}

export {
  BillingHistory,
}

export default BillingHistory;