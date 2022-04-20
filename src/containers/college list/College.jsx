import reac from 'react';
import {useState, useEffect} from 'react';

const College = () => {

    const [dialogOpen, setOpen] = useState(false)
    const [college, setCollege] = useState({})

    return (
        <div className='container '>
            <div className='row'>
                <div className="col-md my-4 pt-4 max-auto">
                    <h1>College List</h1>
                    <div className="input-group rounded mt-3">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default College;