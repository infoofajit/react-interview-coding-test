function FolderAction({handleShowNewFileFolder}) {
  return (
    <div className="flex">
      <button
        type="button"
        className="border border-black bg-white rounded px-1"
        onClick={(e) => handleShowNewFileFolder(e, false)}
      >
        Folder +
      </button>&nbsp;
      <button
        type="button"
        className="border border-black bg-white rounded px-1"
        onClick={(e) => handleShowNewFileFolder(e, true)}
      >
        File +
      </button>
    </div>
  )
}

export default FolderAction
