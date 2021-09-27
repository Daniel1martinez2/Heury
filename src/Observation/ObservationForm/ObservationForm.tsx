import React from 'react'

const dataTest = [
  'visibility',
  'match',
  'control',
  'consistency',
]; 

const ObservationForm = () => {

  const getChecked = (checkBoxArray:React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>[]) => {
    // checkBoxArray.forEach(elem => console.log(elem.checked))
    return checkBoxArray.filter(elem => elem.checked).map(elem => elem.name); 
  }

  const setInitChecked = (checkBoxArray: string[]) => {
    
  }

  const handlerSubmit:React.FormEventHandler<HTMLFormElement>  = (event:any) => {
    event.preventDefault();
    const formRef = event.target;
    // console.log(formRef.match.checked);
    const checkBoxArray = [
      formRef.visibility, 
      formRef.match, 
      formRef.control, 
      formRef.consistency,
      formRef.error,
      formRef.recognition,
      formRef.scales,
      formRef.flexibility,
      formRef.recover,
      formRef.documentation,
    ]; 
    console.log(getChecked(checkBoxArray));

    // check the box with code
    // formRef.documentation.checked = true;  
  }
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input type="text" />
        <div>
          <label>
            Visibility of system status
            <input type="checkbox" name="visibility" defaultChecked={dataTest.includes("visibility")} />
          </label>
          <label>
            Match between system and the real world
            <input type="checkbox" name="match" defaultChecked={dataTest.includes("match")} />
          </label>
          <label>
            User control and freedom
            <input type="checkbox" name="control" defaultChecked={dataTest.includes("control")} />
          </label>
          <label>
            Consistency and standards
            <input type="checkbox" name="consistency" defaultChecked={dataTest.includes("consistency")} />
          </label>
          <label>
            Error prevention
            <input type="checkbox" name="error" defaultChecked={dataTest.includes("error")} />
          </label>
          <label>
            Recognition rather than recall
            <input type="checkbox" name="recognition" defaultChecked={dataTest.includes("recognition")} />
          </label>
          <label>
            Flexibility and efficiency of use
            <input type="checkbox" name="scales" defaultChecked={dataTest.includes("scales")} />
          </label>
          <label>
            Aesthetic and minimalist design
            <input type="checkbox" name="flexibility" defaultChecked={dataTest.includes("flexibility")} />
          </label>
          <label>
            Help recognize & recover from errors
            <input type="checkbox" name="recover" defaultChecked={dataTest.includes("recover")} />
          </label>
          <label>
            Help and documentation
            <input type="checkbox" name="documentation" defaultChecked={dataTest.includes("documentation")} />
          </label>
        </div>

        <label>
          Evidence
          <input type="text" />
        </label>
          
        <label>
          Severity
          <select name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </label>
        
        <label>
          Solution
          <input type="text" />
        </label>

        <button>Create Observation</button>

      </form>
    </div>
  )
}

export default ObservationForm
