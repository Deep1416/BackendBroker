# HOUSE BROKER API DOCUMENTATION

This is house broker Backend API documentation.It allows you to manage user registration, login, logout,update ,delete Acount of user and add the house property of sell seller user .

## Endpoints for Authentication
### Method:- $\color{blue}{POST}$

#### register URL:-
> https://backend-brokerapi.onrender.com/api/v1/user/register

##### Body raw(json)

````JSON
{
    "username": "rohani",
    "email": "rohini@gmail.com",
    "password": "password",
    "avatar": "https://www.betterphoto.com/uploads/processed/2136/2021Sep10-0707241DSC08620_Final.jpg",
    "role": "admin",
    "address": {
        "address": "sohad xyz colony",
        "city":  "hunterganj",
        "state": "ranchi",
        "pincode": 830236
    }

}
````


### Method:- $\color{blue}{POST}$ 
#### Login URL:-
> https://backend-brokerapi.onrender.com/api/v1/user/signin

##### Body raw(json)

````JSON
{
   "email": "rohini@gmail.com",
    "password": "password",
}
````
### Method:- $\color{green}{GET}$
#### Logout URL:-

> https://backend-brokerapi.onrender.com/api/v1/user/signout


### Method:- $\color{blue}{POST}$
#### Update/Edit profile URL:-

> https://backend-brokerapi.onrender.com/api/v1/user/update

##### Body raw(json)

````JSON
{
    "username": "Archana kumari"
}
````

### Method:- $\color{red}{DELETE}$
#### Delete URL:-

> https://backend-brokerapi.onrender.com/api/v1/user/delete


````javascript Header
{ Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDdkZjNiZmQ0MTM1Nzg4OTcyNmZjOCIsIm5hbWUiOiJqb2hhbiIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTcxMTc5NTU0OCwiaWF0IjoxNzExNzkxOTQ4fQ.A07WUEmK2lvPTknrw6VZlAVFBw5pjq0yv9yQZwASdBc"}
````

## Endpoints of houseProperty for seller .

### Method:- $\color{blue}{POST}$ 
#### createProperty URL:-

> https://backend-brokerapi.onrender.com/api/v1/property/create

##### Body raw(json)

````JSON
{
    "title": "House in West California",
    "discription": "Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.",
    "Price": 540000,
    "location": "Delhi",
    "bedrooms": 4,
    "bathrooms": 2,
    "parking": true,
    "type": "sale",
    "imageUrls": [
        "https://preview.colorlib.com/theme/theestate/images/featured_1.jpg",
        "https://preview.colorlib.com/theme/theestate/images/featured_2.jpg"
    ]
}
````
### Method:- $\color{green}{GET}$ 
#### getAllProperty with search URL:-

> https://backend-brokerapi.onrender.com/api/v1/property/get


### Method:- $\color{green}{GET}$ 
#### getProperty by Id URL:-

> https://backend-brokerapi.onrender.com/api/v1/property/get/:id


### Method:- $\color{yellow}{PATCH}$ 
#### updateProperty URL:-

> https://backend-brokerapi.onrender.com/api/v1/property/update/:id 

##### Body raw(json)

````JSON
{
    "discription": "Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.",
    "Price": 540000,
}
````

### Method:- $\color{red}{DELETE}$ 
#### deleteProperty URL:-

> https://backend-brokerapi.onrender.com/api/v1/property/delete/:id


# FRONTEND URL:- 
> https://broker-frontendui.onrender.com
