import { useState } from "react";

function Folder({explorer}) {
  const [expand, setExpand] = useState(false)
  
  return (
    <>
      {
        explorer?.isFolder ? (
          <div className="flex items-center bg-gray-200 px-1 mb-1" onClick={() => setExpand(!expand)}>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32z" />
            </svg>
            <span>{explorer.name}</span>
          </div>
        ) : (
          <div className="flex items-center mb-1">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z" />
            </svg>
            <span>{explorer.name}</span>
          </div>
        )
      }
      {explorer?.items?.length ? <div className={`ml-4 ${!expand ? `hidden` : ''}`}>
        {explorer?.items.map((item) => (
          <Folder key={item.id} explorer={item} />
        ))}
      </div> : ''}
    </>
  )
}

export default Folder;
