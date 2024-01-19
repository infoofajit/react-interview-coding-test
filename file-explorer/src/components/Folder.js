import { useState } from "react";
import FolderAction from "./FolderAction"
import FolderIcon from './common/FolderIcon'
import FileIcon from './common/FileIcon'

function Folder({explorer}) {
  const [expand, setExpand] = useState(false)
  const [addNewFileFolder, setAddNewFileFolder] = useState({
    isHide: true,
    isFile: true,
  })

  const handleShowNewFileFolder = (e, isFile) => {
    e.stopPropagation()
    setAddNewFileFolder({isHide: false, isFile: isFile})
  }

  const handleHideNewFileFolder = () => {
    setAddNewFileFolder({...addNewFileFolder, isHide: true})
  }
  
  return (
    <>
      {
        explorer?.isFolder ? (
          <>
            <div className="flex justify-between bg-gray-200 px-1 mb-1" onClick={() => setExpand(!expand)}>
              <div className="flex items-center">
                <FolderIcon />
                <span>{explorer.name}</span>
              </div>
              <FolderAction handleShowNewFileFolder={handleShowNewFileFolder} />
            </div>
            {!addNewFileFolder?.isHide && (
              <div className="flex items-center px-1 mb-1">
                {addNewFileFolder.isFile ? <FileIcon /> : <FolderIcon />}
                <input type="text" name="" autoFocus onBlur={() => handleHideNewFileFolder()} className="border border-black rounded px-1" />
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center mb-1">
            <FileIcon />
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

export default Folder
