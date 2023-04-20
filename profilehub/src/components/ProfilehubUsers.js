import React from 'react'


const ProfilehubUsers = ({users}) => {

    return (
        <div>
            <h2>List of ProfileHub Users</h2>
            <div className="container-fluid mt-5">
                <div className="row">
                {
                        users.map((curElem) => {
                        
                            const {name, email, id, website,username,company,address,phone} = curElem;                        
                            return (
                              <div className="col-10 col-md-6 mt-5" key={id}>
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="image"> <img src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`} alt={username} className="rounded" width="155" /> </div>
                                            <div className="ml-3 w-100">
                                                <div className=" d-flex flex-column mb-0 mt-0 textLeft">
                                                    <h4>{name}</h4>
                                                    <span>{`Email: ${email}`}</span>
                                                    <span>{`Phone: ${phone}`}</span>
                                                    <span >Website:<span>{website}</span></span>
                                                    <span >Company:<span>{company.name}</span></span>
                                                </div>
                                                <div className="bg-primary d-flex justify-content-between  text-white stats">
                                                    <div className="d-flex flex-column">
                                                        <span>{`Address Line 1: ${address.street}, ${address.suite}`}</span>
                                                        <span>{`Address Line 2: ${address.city}, ${address.zipcode}`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                })        
                }
                    
                </div>
            </div>
        </div>
    )
}

export default ProfilehubUsers