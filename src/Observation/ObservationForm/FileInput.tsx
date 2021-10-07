import React from 'react'
import styles from './FileInput.module.css'; 
interface FileInputInterface {
  onSetEvidence: (img:string) => void; 
  prevEvidence: string | null; 
}; 



const FileInput:React.FC<FileInputInterface> = ({onSetEvidence, prevEvidence}) => {

  const handleFileInput:React.ChangeEventHandler<HTMLInputElement> = (event:any) => {
    let file = event.currentTarget.files[0]; 
    console.log(file, '🔥');
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = (e:any) => {
      onSetEvidence(e.target.result)
    }
  }; 

  const handleDeleteImage = () => onSetEvidence('')
  
  return (
    <React.Fragment>
      {prevEvidence === '' && 
        <div className={styles['btn-container']}>
          <input onChange={handleFileInput} className={styles['file-input']} type="file" accept=".jpg, .png" name="file"/>
          <span>Upload Image</span>
        </div>
      }
      {prevEvidence !== '' && 
        <div className={styles['image-container']}>
          <img className={styles['thumb']} src={prevEvidence? prevEvidence : ''} alt="" />
          <svg onClick={handleDeleteImage} className={styles['cancel']} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
      }
    </React.Fragment>

  )
}

export default FileInput

