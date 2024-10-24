import '../popwindow/popwindow.css'
export default function popupwindow(props){
    
    return (
        <>
            <div className="container">
               {/*  <div className='header'>
                    <h3>Window</h3>
                    <button>close</button>
                </div> */}
                <div className='form-input'>
                    <label htmlFor="firstName">First Name:</label>
                    <input id="firstName" type="text"/>
                </div>
                <div className='form-input'>
                    <label htmlFor="lastName">Last Name:</label>
                    <input id="lastName" type="text"/>
                </div>

                {/* <label htmlFor="inputField">Email:</label>
                <input id="inputField" type="text"/>

                <label htmlFor="inputField">PhoneNo:</label>
                <input id="inputField" type="text"/>

                <label htmlFor="inputField"> City:</label>
                <input id="inputField" type="text"/> */}
            </div>
        </>
    )
}