import { useState } from "react";

const UploadForm = () => {
    
    const { file, setFile } = useState(null);

    const { error, setError } = useState(null);

    // create an array with allowed image extensions
    const types= ['image/png', 'image/jpg', 'image/jpeg'];

    const changeHandler = (e) =>{

        // selected the image
        let selected = e.target.files[0];

        if (selected) {
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError('Please select an image file (png, jpg or jpeg)');
        }
    }


    return ( 
        <form action="">
            <input type="file" onChange = { changeHandler } />
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div>}
            </div>
        </form>
    );
}
 
export default UploadForm;