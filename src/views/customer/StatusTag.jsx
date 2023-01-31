import React from 'react'

const StatusTag = ({ ratio }) => {
  return (
    <div className={`w-[126px] h-8 ${ratio < 0.1 ? 'bg-[#FFD7E1]' : ratio < 0.5 ? 'bg-[#FFC7004D]' : 'bg-[#E2FCD9]'} flex items-center justify-center rounded-full`}>
      <p className={`${ratio < 0.1 ? "text-[#C95A6D]" : ratio < 0.5 ? "text-[#DCAB00]" : "text-[#78B95B]"}`}>{ratio < 0.1 ? "Full" : ratio < 0.5 ? "Crowded" : "Available"}</p>
    </div>
  )
}

export default StatusTag
